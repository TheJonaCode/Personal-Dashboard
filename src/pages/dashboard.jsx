import Notas from "../components/notas";

function Dashboard() {
 return (
    <div>
      <h2>My Personal Dashboard</h2>
      <div className="mt-4 container-fluid d-flex justify-content-center">
      <div class="card w-25">
        <img src="https://img.freepik.com/free-vector/notes-concept-illustration_114360-689.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Notas Rápidas</h5>
          <p class="card-text">Crear, editar y eliminar notas importantes de la semana.</p>
          <a href="/Notas" class="btn btn-primary">Ir a Notas</a>
        </div>
      </div>
      <div class="card w-25 mx-5">
        <img src="https://cdn.pixabay.com/photo/2022/04/12/00/30/weather-7126917_960_720.png" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Clima</h5>
          <p class="card-text">Visualiza el clima exacto en la ciudad o país que necesites.</p>
          <a href="#" class="btn btn-primary">Ir a Clima</a>
        </div>
      </div>
      <div class="card w-25">
        <img src="https://i.pinimg.com/736x/47/f9/f8/47f9f81382acacbbe2616bba06c6cce8.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Tareas</h5>
          <p class="card-text">Crear, editar y eliminar notas importantes de la semana.</p>
          <a href="#" class="btn btn-primary">Ir a Tareas</a>
        </div>
        </div>
      </div>
    </div>
  );
  
}

export default Dashboard;
