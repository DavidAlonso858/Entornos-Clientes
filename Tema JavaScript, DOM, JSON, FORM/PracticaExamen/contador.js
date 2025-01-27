window.onload = () => {
    mostrar()
    global();
}

function mostrar() {
    tasksAll.taskList.forEach((task, index) => {
        const taskDiv = document.createElement("div");
        taskDiv.id = `task-${index}`;
        taskDiv.className = "task";

        // Crear el contenido del div de la tarea
        taskDiv.innerHTML = `
          <h3>${task.task}</h3>
          <p>Assigned to: ${task.assignedTo}</p>
          <p>Duration: ${task.duration} minutes</p>
          <p>Break: ${task.break} minutes</p>
          <p class="task-timer">Time: ${String(task.duration).padStart(2, "0")}:00</p>
          <button onclick="startTaskTimer(${index})">Start</button>
        `;

        // Añadir la tarea al contenedor principal
        document.querySelector(".tasks").appendChild(taskDiv);
    });
}

function global() {
    // Botones de temporizador global
    const globalControls = document.createElement("div");
    globalControls.innerHTML = `
    <button class="start">Start Global</button>
    <button class="stop" >Stop Global</button>
    <button class="stop2">Stop All Tasks</button>
  `;
    document.querySelector(".container").appendChild(globalControls);
    document.querySelector(".start").addEventListener("click", function () {
        startGlobalTimer();
    })

    document.querySelector(".stop").addEventListener("click", function () {
        stopGlobalTimer();
    })

    document.querySelector(".stop2").addEventListener("click", function () {
        stopAllTaskTimers();
    })
}



let globalTime = 0; // Tiempo global en segundos
let globalTimer; // Intervalo del temporizador global
let taskTimers = []; // Array para almacenar los intervalos individuales de las tareas

// Formatea el tiempo en mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// Función para iniciar el temporizador global
function startGlobalTimer() {
    const globalTimeDiv = document.querySelector(".time");

    if (!globalTimer) {
        globalTimer = setInterval(() => {
            globalTime++;
            globalTimeDiv.textContent = formatTime(globalTime);
        }, 1000);
    }
}

// Función para detener el temporizador global
function stopGlobalTimer() {
    if (globalTimer) {
        clearInterval(globalTimer);
        globalTimer = null;
    }
}

// Función para iniciar el temporizador de una tarea específica
function startTaskTimer(index) {
    const task = tasksAll.taskList[index];
    let remainingTime = task.duration * 60; // Convertir minutos a segundos
    let breakTime = task.break * 60;

    const taskTimerEl = document.querySelector(`#task-${index} .task-timer`);
    const startButton = document.querySelector(`#task-${index} button`);

    // Evitar que se inicien múltiples temporizadores para la misma tarea
    if (taskTimers[index]) return;

    startButton.disabled = true; // Deshabilitar el botón mientras se ejecuta el temporizador

    // Iniciar temporizador de la tarea
    taskTimers[index] = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime--;
            taskTimerEl.textContent = formatTime(remainingTime);
        } else if (breakTime > 0) {
            breakTime--;
            taskTimerEl.textContent = `Break: ${formatTime(breakTime)}`;
        } else {
            // Cuando finaliza la tarea y el descanso
            clearInterval(taskTimers[index]);
            taskTimers[index] = null;
            taskTimerEl.textContent = "Done!";
            startButton.disabled = false; // Habilitar el botón
        }
    }, 1000);
}

// Función para detener todos los temporizadores individuales
function stopAllTaskTimers() {
    taskTimers.forEach((timer, index) => {
        if (timer) {
            clearInterval(timer);
            taskTimers[index] = null;

            const taskTimerEl = document.querySelector(`#task-${index} .task-timer`);
            taskTimerEl.textContent = "Time's up!";
        }
    });
    stopGlobalTimer();
}