import dayjs from 'dayjs'
import 'dayjs/locale/es'


dayjs.locale('es')
dayjs().locale('es').format('MMMM D, YYYY')


const now = dayjs();

let message = '';

export function humanizar_fecha(fecha) {
    fecha = dayjs(fecha);
    const diffMinutes = fecha.diff(now, 'minutes');
    const diffHours = fecha.diff(now, 'hours');
    const diffDays = fecha.diff(now, 'days');
    if (diffDays < 30) {
        if (diffDays < 1) {
            if (diffMinutes < 60) {
                message = `<h1>Hace ${diffMinutes} minutos</h1>`;
            } else if (diffHours < 24) {
                message = `<h1>Hace ${diffHours} horas</h1>`;
            }
        } else {
            if (diffDays === 1) {
                message = `<h1>Hace ${diffDays} día</h1>`;
            } else {
                message = `<h1>Hace ${diffDays} días</h1>`;
            }
        }
    } else if (diffDays > 30 && diffDays < 365) {
        message = fecha.format('MMMM DD');

    } else {
        message = fecha.format('MMMM DD, YYYY');
    }

    document.getElementById('app').innerHTML = message;

}


