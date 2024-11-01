#include <GL/glew.h>
#include <GLFW/glfw3.h>
#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>
#include <iostream>

// Shader de ejemplo (Vertex Shader)
const char* vertexShaderSource = R"(
#version 330 core
layout(location = 0) in vec3 position;
layout(location = 1) in vec3 color;
out vec3 fragColor;
uniform mat4 model;
void main() {
    fragColor = color;
    gl_Position = model * vec4(position, 1.0);
}
)";

// Shader de ejemplo (Fragment Shader)
const char* fragmentShaderSource = R"(
#version 330 core
in vec3 fragColor;
out vec4 FragColor;
void main() {
    FragColor = vec4(fragColor, 1.0);
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

// Variables globales para manejar la rotación
float rotationAngle = 0.0f;
float targetAngle = 0.0f;
bool isRotating = false;

// Función de callback para el clic del mouse
void mouseButtonCallback(GLFWwindow* window, int button, int action, int mods) {
    if (button == GLFW_MOUSE_BUTTON_LEFT && action == GLFW_PRESS && !isRotating) {
        targetAngle += glm::radians(90.0f);  // Incrementa el ángulo objetivo en 90 grados
        isRotating = true;
    }
}

int main() {
    // Inicialización de GLFW
    if (!glfwInit()) {
        std::cerr << "Error al inicializar GLFW" << std::endl;
        return -1;
    }

    // Configuración de la versión de OpenGL y perfil
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

    // Creación de la ventana
    GLFWwindow* window = glfwCreateWindow(800, 600, "Triángulo de Colores Giratorio", nullptr, nullptr);
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

    // Definición de vértices y colores del triángulo
    GLfloat vertices[] = {
        // Posiciones       // Colores
         0.0f,  0.5f, 0.0f,  1.0f, 0.0f, 0.0f,  // Rojo
        -0.5f, -0.5f, 0.0f,  0.0f, 1.0f, 0.0f,  // Verde
         0.5f, -0.5f, 0.0f,  0.0f, 0.0f, 1.0f   // Azul
    };

    // Creación del VAO y VBO
    GLuint VAO, VBO;
    glGenVertexArrays(1, &VAO);
    glGenBuffers(1, &VBO);

    glBindVertexArray(VAO);

    glBindBuffer(GL_ARRAY_BUFFER, VBO);
    glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)0);
    glEnableVertexAttribArray(0);
    glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)(3 * sizeof(float)));
    glEnableVertexAttribArray(1);

    // Compilación y linkeo de los shaders
    GLuint vertexShader = compileShader(GL_VERTEX_SHADER, vertexShaderSource);
    GLuint fragmentShader = compileShader(GL_FRAGMENT_SHADER, fragmentShaderSource);

    GLuint shaderProgram = glCreateProgram();
    glAttachShader(shaderProgram, vertexShader);
    glAttachShader(shaderProgram, fragmentShader);
    glLinkProgram(shaderProgram);

    // Configuramos el callback para manejar el clic del mouse
    glfwSetMouseButtonCallback(window, mouseButtonCallback);

    // Liberamos los shaders
    glDeleteShader(vertexShader);
    glDeleteShader(fragmentShader);

    // Ciclo de renderizado
    while (!glfwWindowShouldClose(window)) {
        // Procesamos eventos
        glfwPollEvents();

        // Limpiamos la pantalla
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

        // Usamos el shader
        glUseProgram(shaderProgram);

        // Calculamos la rotación
        if (isRotating) {
            rotationAngle += 0.02f;  // Ajuste de velocidad de rotación
            if (rotationAngle >= targetAngle) {
                rotationAngle = targetAngle;
                isRotating = false;  // Detiene la rotación cuando alcanza el ángulo objetivo
            }
        }

        // Matriz de modelo para aplicar la rotación
        glm::mat4 model = glm::rotate(glm::mat4(1.0f), rotationAngle, glm::vec3(0.0f, 0.0f, 1.0f));

        // Pasamos la matriz de modelo al shader
        glUniformMatrix4fv(glGetUniformLocation(shaderProgram, "model"), 1, GL_FALSE, glm::value_ptr(model));

        // Dibujamos el triángulo
        glBindVertexArray(VAO);
        glDrawArrays(GL_TRIANGLES, 0, 3);

        // Intercambiamos los buffers
        glfwSwapBuffers(window);
    }

    // Liberamos los recursos
    glDeleteVertexArrays(1, &VAO);
    glDeleteBuffers(1, &VBO);
    glDeleteProgram(shaderProgram);

    glfwDestroyWindow(window);
    glfwTerminate();
    return 0;
}
