#include <GL/glew.h>
#include <GLFW/glfw3.h>
#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>
#include <iostream>

// Función para manejar los errores de GLFW
void glfwErrorCallback(int error, const char* description) {
    std::cerr << "GLFW Error (" << error << "): " << description << std::endl;
}

// Shader de ejemplo (Vertex Shader)
const char* vertexShaderSource = R"(
#version 330 core
layout(location = 0) in vec3 position;
layout(location = 1) in vec3 color;
out vec3 fragColor;
uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;
void main() {
    fragColor = color;
    gl_Position = projection * view * model * vec4(position, 1.0);
}
)";

// Shader de ejemplo (Fragment Shader)
const char* fragmentShaderSource = R"(
#version 330 core
in vec3 fragColor;
out vec4 FragColor;
void main() {
    FragColor = vec4(fragColor, 1.0);  // Colores vivos
}
)";

// Función para compilar los shaders
GLuint compileShader(GLenum type, const char* source) {
    GLuint shader = glCreateShader(type);
    glShaderSource(shader, 1, &source, nullptr);
    glCompileShader(shader);

    GLint success;
    glGetShaderiv(shader, GL_COMPILE_STATUS, &success);
    if (!success) {
        char infoLog[512];
        glGetShaderInfoLog(shader, 512, nullptr, infoLog);
        std::cerr << "Error de compilación del shader: " << infoLog << std::endl;
    }

    return shader;
}

int main() {
    // Inicialización de GLFW
    if (!glfwInit()) {
        std::cerr << "Error al inicializar GLFW" << std::endl;
        return -1;
    }

    glfwSetErrorCallback(glfwErrorCallback);

    // Configuración de la versión de OpenGL y perfil
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

    // Creación de la ventana
    GLFWwindow* window = glfwCreateWindow(800, 600, "Cubo Colorido Giratorio", nullptr, nullptr);
    if (!window) {
        std::cerr << "Error al crear la ventana GLFW" << std::endl;
        glfwTerminate();
        return -1;
    }
    glfwMakeContextCurrent(window);

    // Inicialización de GLEW
    if (glewInit() != GLEW_OK) {
        std::cerr << "Error al inicializar GLEW" << std::endl;
        return -1;
    }

    // Configuración de OpenGL
    glEnable(GL_DEPTH_TEST);

    // Definición de vértices y colores del cubo
    GLfloat vertices[] = {
        // Posiciones          // Colores
        -0.5f, -0.5f, -0.5f,   1.0f, 0.0f, 0.0f,  // Rojo
         0.5f, -0.5f, -0.5f,   0.0f, 1.0f, 0.0f,  // Verde
         0.5f,  0.5f, -0.5f,   0.0f, 0.0f, 1.0f,  // Azul
        -0.5f,  0.5f, -0.5f,   1.0f, 1.0f, 0.0f,  // Amarillo

        -0.5f, -0.5f,  0.5f,   1.0f, 0.0f, 1.0f,  // Magenta
         0.5f, -0.5f,  0.5f,   0.0f, 1.0f, 1.0f,  // Cian
         0.5f,  0.5f,  0.5f,   1.0f, 1.0f, 1.0f,  // Blanco
        -0.5f,  0.5f,  0.5f,   0.0f, 0.0f, 0.0f   // Negro
    };

    GLuint indices[] = {
        0, 1, 2, 2, 3, 0, // Cara trasera
        4, 5, 6, 6, 7, 4, // Cara frontal
        0, 4, 7, 7, 3, 0, // Cara izquierda
        1, 5, 6, 6, 2, 1, // Cara derecha
        3, 2, 6, 6, 7, 3, // Cara superior
        0, 1, 5, 5, 4, 0  // Cara inferior
    };

    // Creación del Vertex Array Object, Vertex Buffer Object y Element Buffer Object
    GLuint VAO, VBO, EBO;
    glGenVertexArrays(1, &VAO);
    glGenBuffers(1, &VBO);
    glGenBuffers(1, &EBO);

    glBindVertexArray(VAO);

    glBindBuffer(GL_ARRAY_BUFFER, VBO);
    glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);
    glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);

    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)0);
    glEnableVertexAttribArray(0);
    glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)(3 * sizeof(float)));
    glEnableVertexAttribArray(1);

    // Compilamos los shaders
    GLuint vertexShader = compileShader(GL_VERTEX_SHADER, vertexShaderSource);
    GLuint fragmentShader = compileShader(GL_FRAGMENT_SHADER, fragmentShaderSource);

    GLuint shaderProgram = glCreateProgram();
    glAttachShader(shaderProgram, vertexShader);
    glAttachShader(shaderProgram, fragmentShader);
    glLinkProgram(shaderProgram);

    // Verificación de errores de linkeo del programa
    GLint success;
    glGetProgramiv(shaderProgram, GL_LINK_STATUS, &success);
    if (!success) {
        char infoLog[512];
        glGetProgramInfoLog(shaderProgram, 512, nullptr, infoLog);
        std::cerr << "Error de linkeo del programa: " << infoLog << std::endl;
    }

    // Liberamos los shaders ya que no son necesarios después del linkeo
    glDeleteShader(vertexShader);
    glDeleteShader(fragmentShader);

    // Configuración de las matrices de transformación
    glm::mat4 view = glm::translate(glm::mat4(1.0f), glm::vec3(0.0f, 0.0f, -3.0f));
    glm::mat4 projection = glm::perspective(glm::radians(45.0f), 800.0f / 600.0f, 0.1f, 100.0f);

    // Variables para la rotación
    float rotationAngle = 0.0f;

    // Render loop
    while (!glfwWindowShouldClose(window)) {
        // Procesamos los eventos de entrada
        glfwPollEvents();

        // Limpiamos la pantalla
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

        // Usamos el programa de shaders
        glUseProgram(shaderProgram);

        // Actualizamos el ángulo de rotación a una velocidad más lenta
        rotationAngle += 0.002f;  // Rotación lenta

        // Creamos la matriz de modelo con la rotación sobre los ejes X, Y y Z
        glm::mat4 model = glm::rotate(glm::mat4(1.0f), rotationAngle, glm::vec3(1.0f, 1.0f, 1.0f));

        // Pasamos las matrices al shader
        glUniformMatrix4fv(glGetUniformLocation(shaderProgram, "model"), 1, GL_FALSE, glm::value_ptr(model));
        glUniformMatrix4fv(glGetUniformLocation(shaderProgram, "view"), 1, GL_FALSE, glm::value_ptr(view));
        glUniformMatrix4fv(glGetUniformLocation(shaderProgram, "projection"), 1, GL_FALSE, glm::value_ptr(projection));

        // Dibujamos el cubo
        glBindVertexArray(VAO);
        glDrawElements(GL_TRIANGLES, 36, GL_UNSIGNED_INT, 0);

        // Intercambiamos los buffers
        glfwSwapBuffers(window);
    }

    // Liberamos recursos
    glDeleteVertexArrays(1, &VAO);
    glDeleteBuffers(1, &VBO);
    glDeleteBuffers(1, &EBO);
    glDeleteProgram(shaderProgram);

    glfwDestroyWindow(window);
    glfwTerminate();
    return 0;
}
