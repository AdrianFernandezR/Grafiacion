#include <GL/glew.h>
#include <GLFW/glfw3.h>
#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>
#include <iostream>
#include <vector>
#include <cmath>

// Función para manejar los errores de GLFW
void glfwErrorCallback(int error, const char* description) {
    std::cerr << "GLFW Error (" << error << "): " << description << std::endl;
}

// Shader de ejemplo (Vertex Shader)
const char* vertexShaderSource = R"(
#version 330 core
layout(location = 0) in vec3 position;
uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;
void main() {
    gl_Position = projection * view * model * vec4(position, 1.0);
}
)";

// Shader de ejemplo (Fragment Shader)
const char* fragmentShaderSource = R"(
#version 330 core
out vec4 FragColor;
void main() {
    FragColor = vec4(0.2, 0.6, 1.0, 1.0);  // Color azul claro
}
)";

// Función para compilar los shaders
GLuint compileShader(GLenum type, const char* source) {
    GLuint shader = glCreateShader(type);
    glShaderSource(shader, 1, &source, nullptr);
    glCompileShader(shader);

    // Verificación de errores
    GLint success;
    glGetShaderiv(shader, GL_COMPILE_STATUS, &success);
    if (!success) {
        char infoLog[512];
        glGetShaderInfoLog(shader, 512, nullptr, infoLog);
        std::cerr << "Error de compilación del shader: " << infoLog << std::endl;
    }

    return shader;
}

// Función para generar una esfera subdividiendo un icosaedro
void generateSphere(std::vector<glm::vec3>& vertices, int subdivisions) {
    // Coordenadas de un icosaedro básico
    const float t = (1.0 + std::sqrt(5.0)) / 2.0;
    std::vector<glm::vec3> icosahedronVertices = {
        {-1,  t,  0}, { 1,  t,  0}, {-1, -t,  0}, { 1, -t,  0},
        { 0, -1,  t}, { 0,  1,  t}, { 0, -1, -t}, { 0,  1, -t},
        { t,  0, -1}, { t,  0,  1}, {-t,  0, -1}, {-t,  0,  1}
    };

    std::vector<glm::ivec3> icosahedronIndices = {
        {0, 11, 5}, {0, 5, 1}, {0, 1, 7}, {0, 7, 10}, {0, 10, 11},
        {1, 5, 9}, {5, 11, 4}, {11, 10, 2}, {10, 7, 6}, {7, 1, 8},
        {3, 9, 4}, {3, 4, 2}, {3, 2, 6}, {3, 6, 8}, {3, 8, 9},
        {4, 9, 5}, {2, 4, 11}, {6, 2, 10}, {8, 6, 7}, {9, 8, 1}
    };

    // Subdividimos los triángulos del icosaedro para aproximar mejor una esfera
    for (const auto& tri : icosahedronIndices) {
        glm::vec3 v0 = icosahedronVertices[tri.x];
        glm::vec3 v1 = icosahedronVertices[tri.y];
        glm::vec3 v2 = icosahedronVertices[tri.z];

        // Normalizamos los vértices para que estén en la superficie de la esfera
        vertices.push_back(glm::normalize(v0));
        vertices.push_back(glm::normalize(v1));
        vertices.push_back(glm::normalize(v2));
    }
}

// Variables globales para el manejo del mouse
double mouseX = 0.0, mouseY = 0.0;
int windowWidth = 800, windowHeight = 600;

// Callback para manejar el movimiento del mouse
void mouseCallback(GLFWwindow* window, double xpos, double ypos) {
    mouseX = xpos;
    mouseY = ypos;
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
    GLFWwindow* window = glfwCreateWindow(windowWidth, windowHeight, "Esfera que sigue el mouse", nullptr, nullptr);
    if (!window) {
        std::cerr << "Error al crear la ventana GLFW" << std::endl;
        glfwTerminate();
        return -1;
    }
    glfwMakeContextCurrent(window);

    // Configuración del callback para el mouse
    glfwSetCursorPosCallback(window, mouseCallback);

    // Inicialización de GLEW
    if (glewInit() != GLEW_OK) {
        std::cerr << "Error al inicializar GLEW" << std::endl;
        return -1;
    }

    // Configuración de OpenGL
    glEnable(GL_DEPTH_TEST);

    // Generación de la esfera
    std::vector<glm::vec3> sphereVertices;
    generateSphere(sphereVertices, 2);  // Se puede aumentar el número de subdivisiones

    // Creación del Vertex Array Object y Vertex Buffer Object
    GLuint VAO, VBO;
    glGenVertexArrays(1, &VAO);
    glGenBuffers(1, &VBO);

    glBindVertexArray(VAO);
    glBindBuffer(GL_ARRAY_BUFFER, VBO);
    glBufferData(GL_ARRAY_BUFFER, sphereVertices.size() * sizeof(glm::vec3), &sphereVertices[0], GL_STATIC_DRAW);
    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
    glEnableVertexAttribArray(0);

    // Compilamos los shaders
    GLuint vertexShader = compileShader(GL_VERTEX_SHADER, vertexShaderSource);
    GLuint fragmentShader = compileShader(GL_FRAGMENT_SHADER, fragmentShaderSource);

    GLuint shaderProgram = glCreateProgram();
    glAttachShader(shaderProgram, vertexShader);
    glAttachShader(shaderProgram, fragmentShader);
    glLinkProgram(shaderProgram);

    glDeleteShader(vertexShader);
    glDeleteShader(fragmentShader);

    // Configuración de las matrices de transformación
    glm::mat4 view = glm::translate(glm::mat4(1.0f), glm::vec3(0.0f, 0.0f, -5.0f));
    glm::mat4 projection = glm::perspective(glm::radians(45.0f), (float)windowWidth / windowHeight, 0.1f, 100.0f);

    // Render loop
    while (!glfwWindowShouldClose(window)) {
        glfwPollEvents();

        // Conversión de la posición del mouse a coordenadas del mundo
        float xPosMapped = (mouseX / windowWidth) * 2.0f - 1.0f;
        float yPosMapped = 1.0f - (mouseY / windowHeight) * 2.0f;

        glm::mat4 model = glm::translate(glm::mat4(1.0f), glm::vec3(xPosMapped, yPosMapped, 0.0f));

        // Renderizamos la escena
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
        glUseProgram(shaderProgram);

        glUniformMatrix4fv(glGetUniformLocation(shaderProgram, "model"), 1, GL_FALSE, glm::value_ptr(model));
        glUniformMatrix4fv(glGetUniformLocation(shaderProgram, "view"), 1, GL_FALSE, glm::value_ptr(view));
        glUniformMatrix4fv(glGetUniformLocation(shaderProgram, "projection"), 1, GL_FALSE, glm::value_ptr(projection));

        glBindVertexArray(VAO);
        glDrawArrays(GL_TRIANGLES, 0, sphereVertices.size());

        glfwSwapBuffers(window);
    }

    // Liberación de recursos
    glDeleteVertexArrays(1, &VAO);
    glDeleteBuffers(1, &VBO);
    glDeleteProgram(shaderProgram);

    glfwDestroyWindow(window);
    glfwTerminate();
    return 0;
}
