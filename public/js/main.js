const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const dataHide = document.querySelector(".middle_layer");

const getInfo = async (e) => {
  e.preventDefault();
  let cityValue = cityName.value;
  if (cityValue === "") {
    city_name.innerText = `Please provide the name of your city💒`;
    dataHide.classList.add("data_hide");
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=d23e5d9048041b4aa2c191e47fe00df3`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
      temp_real_val.innerText = arrData[0].main.temp;
      const currTemp = arrData[0].weather[0].main;

      // conditon to check the weather status

      if (currTemp == "Clear") {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
      } else if (currTemp == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (currTemp == "Rain") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color:#eccc68;'></i>";
      }
      dataHide.classList.remove("data_hide");
    } catch {
      city_name.innerText = `Oops😲, please enter correct name of your city.`;
      dataHide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
