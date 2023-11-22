import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {PacientesService} from "../../service/pacientes.service";
import {Router} from "@angular/router";
import {Chart} from "chart.js/auto";

@Component({
  selector: 'app-examenes-p',
  templateUrl: './examenes-p.component.html',
  styleUrls: ['./examenes-p.component.css']
})
export class ExamenesPComponent implements OnInit, OnDestroy, AfterViewInit {

    private socket: WebSocket; // Almacena la conexión WebSocket
    private chart!: Chart;  // Almacena el gráfico
    private chartData: number[] = []; // Almacena los datos para el gráfico

    constructor(private pacienteService: PacientesService,private router: Router){

        this.socket = new WebSocket('ws://18.216.246.183:8080/random-binary');

        // Configura el tipo de datos binarios
        this.socket.binaryType = 'arraybuffer'; // Configura el tipo de datos binarios

        // Configura los controladores de eventos de WebSocket para la conexión WebSocket
        // Aquí puedes procesar los eventos de WebSocket y realizar tareas de inicialización.
        this.socket.onopen = (event) => {
            console.log('Conexión WebSocket abierta.');
        };

        // Aquí puedes procesar los datos binarios recibidos del servidor y actualizar el gráfico.
        this.socket.onmessage = (event) => {
            const data = new Uint16Array(event.data); // Convierte el ArrayBuffer a Uint16Array
            this.updateChartWithData(data); // Actualiza el gráfico
        };

        // Aquí puedes procesar el evento de cierre de la conexión WebSocket.
        this.socket.onclose = (event) => {
            if (event.wasClean) { // Si la conexión se cierra limpiamente, se muestra el código y el motivo.
                console.log(`Conexión cerrada limpiamente, código: ${event.code}, motivo: ${event.reason}`); // Muestra el código y el motivo
            } else {
                console.error('Conexión rota');
            }
        };

        // Aquí puedes procesar los errores de WebSocket.
        this.socket.onerror = (error) => {
            console.error('Error de WebSocket:', error);
        };
    }
    public sendBinaryData(): void {
        // Aquí puedes enviar datos binarios al servidor
        const binaryData = new Uint8Array([1, 2, 3, 4, 5]); // Crea un Uint8Array con datos binarios
        this.socket.send(binaryData); // Envía datos binarios al servidor a través de la conexión WebSocket
    }

    updateChartWithData(data: Uint16Array) {
        // Convierte el Int16Array a un array normal para poder usar el método push
        const dataArray = Array.from(data);
        // console.log(dataArray);
        this.chartData.push(...dataArray); // Agrega los datos al array de datos del gráfico
        if (this.chartData.length >= 310) { // Si el array de datos del gráfico tiene más de 300 elementos, elimina los 10 primeros elementos
            for (let i = 0; i < dataArray.length; i++) { // Elimina los 10 primeros elementos del array de datos del gráfico
                this.chartData.shift(); // Elimina el primer elemento del array de datos del gráfico
                this.chart.data.datasets[0].data = this.chartData; // Actualiza los datos del gráfico con el array de datos del gráfico
                this.chart.data.labels = Array.from(Array(this.chartData.length).keys()); // Actualiza las etiquetas del gráfico con el array de datos del gráfico
                this.chart.update(); // Actualiza el gráfico con los nuevos datos y etiquetas
            }
        }
        this.chart.data.datasets[0].data = this.chartData; // Actualiza los datos del gráfico con el array de datos del gráfico
        this.chart.data.labels = Array.from(Array(this.chartData.length).keys()); // Actualiza las etiquetas del gráfico con el array de datos del gráfico
        this.chart.update(); // Actualiza el gráfico con los nuevos datos y etiquetas
    }
    /**
     * ngOnDestroy es un método del ciclo de vida de Angular que se ejecuta cuando se destruye el componente.
     * Aquí puedes realizar tareas de limpieza.
     * Por ejemplo, puedes cerrar la conexión WebSocket aquí.
     * También puedes destruir el gráfico aquí.
     * Si no lo usas, el componente se destruirá automáticamente cuando se cierre la conexión WebSocket.
     * Si no cierras la conexión WebSocket, el navegador mantendrá la conexión abierta y seguirá recibiendo datos.
     * Esto puede provocar errores en la consola.
     */
    ngOnDestroy(): void {
        this.socket.close(); // Cierra la conexión WebSocket
        this.chart.destroy(); // Destruye el gráfico
    }

    /**
     * ngAfterViewInit es un método del ciclo de vida de Angular que se ejecuta después de que se haya inicializado la vista del componente.
     * Aquí puedes crear el gráfico en el elemento canvas.
     * Este metodo se ejecuta despues de que el DOM se ha cargado completamente y los componentes hijos se han inicializado.
     */
    ngAfterViewInit(): void {
        // Crea el gráfico en el elemento canvas
        this.chart = new Chart('realtime-chart', {
            type: 'line',
            data: {
                labels: [],
                datasets: [
                    {
                        label: 'data',
                        data: [],
                        pointRadius: 0,
                    },
                ],
            },
            options: {
                animation: false,
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'time'
                        },
                        beginAtZero: true,
                        min: 0,
                        max: 300,
                    },
                    y: {
                        beginAtZero: true,
                        min: 0,
                        max: 4905,
                    },
                },
            }
        });
        // Actualiza el gráfico para que se muestre en la vista del componente
        this.chart.update()
    }



 volver = () => {
    this.router.navigate(['/historiaClinica']);
  }
 ngOnInit(): void {
}



}
