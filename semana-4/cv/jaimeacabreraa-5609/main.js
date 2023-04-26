import './styles/main.scss'
import { humanizar_fecha } from './scripts/humanizar_fecha.js'


humanizar_fecha('2026-09-27T11:24:00')


document.getElementById('app').innerHTML = `
<main>
<section id="nombre_imagen">
    <div class="container">
        <div id="names">JAIME</div>
    </div>

    <div class="container">
        <div id="surnames">CABRERA</div>
    </div>

    <figure class="container pic-profile">
        <img src="https://i.ibb.co/C0ZP68z/profile.jpg" alt="profile" border="0">
    </figure>
</section>

<section>
    <section class="container-fluid mt50" id="perfil">
        <h2>🧔🏾 Perfil</h2>
        <hr>
        <p>Soy Desarrollador Full Stack. Actualmente estoy estudiando Ingeniería de Software, soy Tecnólogo en
            Análisis
            y Desarrollo de Sistemas de Información y Profesional en Contaduría Pública. Desarrollador altamente
            capacitado en programación front-end y back-end. Experto en diseño web, diferentes lenguajes de
            programación, base de datos, servidores, API's y sistemas de control de versiones.</p>
    </section>

    <section class="container-fluid" id="tecnologias">
        <h2>💻 Tecnologías</h2>
        <hr>

        <section id="tecnologias_lenguajes_prog">
            <h3>Lenguajes de Programación</h3>
            <ul>
                <li>Java</li>
                <li>JavaScript </li>
                <li>Python</li>
                <li>PHP</li>
                <li>HTML5 </li>
                <li>CSS</li>
            </ul>
        </section>

        <section id="tecnologias_frameworks">
            <h3>Frameworks</h3>
            <ul>
                <li>Spring</li>
                <li>React</li>
                <li>Angular</li>
                <li>Laravel</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
            </ul>
        </section>

        <section id="tecnologias_bases_de_datos">
            <h3>Base de Datos</h3>
            <ul>
                <li>MySQL</li>
                <li>SQL Server</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Redis</li>
                <li>Firebase</li>
            </ul>
        </section>

        <section id="tecnologias_otros">
            <h3>Otros</h3>
            <ul>
                <li>Git</li>
                <li>Github</li>
                <li>Bitbucket</li>
                <li>AWS</li>
                <li>Azure</li>
                <li>Jira</li>
                <li>Jenkins</li>
                <li>Sonar</li>
                <li>NodeJS</li>
                <li>Linux</li>
                <li>Windows</li>
                <li>Mac Os</li>
            </ul>
        </section>
        <section id="habilidades_fuertes">
            <h2>💪🏾 Habilidader Fuertes</h2>
            <hr>
            <ul>
                <li>HTTP y REST.</li>
                <li>Arquitectura Web</li>
                <li>Bases de Datos y Almacenamiento web</li>
            </ul>
        </section>

        <section id="experiencia">
            <h2>👨🏾‍💻 Experiencia</h2>
            <hr>
            <div>
                <h3>Bancolombia</h3>
                <span><i>Ingeniero Desarollador | Feb 2022 - Actualmente</i></span>
                <p>Desarrollador Full Stack encargado de crear microservicios con SpringBoot, Postgres y
                    desplegarlos con
                    los servicios que ofrece AWS. Crear el portal de autogestion desarrollado en Angular y
                    Material UI.
                    Realizar pruebas unitarias, de performance y end to end con JUnit5, Jest y Selenium.</p>
            </div>

            <div>
                <h3>Robinfood S.A.S.</h3>
                <span><i>Developer Backend Junior | Jun 2021 - Feb 2022</i></span>
                <p>Diseñar, producir o mantener (programar, adaptar e integrar) componentes o subconjuntos de
                    software
                    (clases, módulos, pantallas, rutinas, subsistemas, programas en general) conforme a
                    especificaciones
                    (funcionales y técnicas) para ser integrados en aplicaciones.</p>
            </div>

            <div>
                <h3>Croydon S.A.</h3>
                <span><i>Desarrollador Web | Nov 2020 - Jun 2021</i></span>
                <p>Elaborar, mantener, implantar, documentar los desarrollos de programas.
                    Realizar la etapa de levantamiento de información, análisis para la definición de
                    requerimientos de las
                    soluciones de software a ser desarrolladas.</p>
            </div>
        </section>

        <section id="educacion">
            <h2>🎓 Educación</h2>
            <hr>
            <div>
                <div><strong>Politecnico Gran Colombiano</strong> | <i>Enero 2022 - En Curso</i></div>
                <div><strong>Ingeniero de Software</strong></div>
                <div>Bogotá D.C, Colombia.</div>
                <br>
            </div>

            <div>
                <div><strong>SENA</strong> | <i>Junio 2019 - Junio 2021</i></div>
                <div><strong>Ingeniero de Software</strong></div>
                <div>Bogotá D.C, Colombia.</div>
                <br>
            </div>

            <div>
                <div><strong>Make It Real</strong> | <i>Agosto 2020 - Noviembre 2020</i></div>
                <div><strong>Desarrollador Full Stack</strong></div>
                <div>Medellín, Colombia.</div>
                <br>
            </div>

            <div>
                <div><strong>Universidad Jorge Tadeo Lozano</strong> | <i>Octubre 2018</i></div>
                <div><strong>Contador Publico</strong></div>
                <div>Medellín, Colombia.</div>
            </div>
        </section>
        <section class="container-fluid" id="logros">
            <h2>🏆 Logros</h2>
            <hr>
            <ul>
                <li>Primer puesto Bootcamp SENA 2020</li>
            </ul>
        </section>
        <section class="container-fluid" id="contacto">
            <h2>🌎 Contacto</h2>
            <p>Puedes ponerte en contacto con nosotros a través del siguiente formulario:</p>
            <form id="formulario" method="post">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre"><br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"><br><br>
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows="5"></textarea><br><br>
                <input type="submit" class="btn" value="Enviar"/>
            </form>
            <hr>
            <div>📱3123371764</div>
            <div>📧 cabrerajaimeandres@gmail.com</div>
            <div>🔗<a href="https://www.linkedin.com/in/jaimeacabreraa/">Linkedin</a></div>
            <div>🔗<a href="https://github.com/jaimecabrera911">GitHub</a></div>
            <div>🏡 Bogota D.C., Colombia</div>
        </section>
</main>
<footer>
<p>&copy; 2023 www.jaimecabrera.com</p>
</footer>
`;

const form = document.querySelector('form');
const submitButton = form.querySelector('input[type="submit"]');
submitButton.addEventListener('click', function (event) {
  console.log('Formulario enviado')
  event.preventDefault();
});