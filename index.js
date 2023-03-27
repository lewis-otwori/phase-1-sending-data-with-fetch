function submitData(name, email) {
    const info = {
      name: name,
      email: email,
    };
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(info),
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(function (data) {
        let newId = data.id;
        let idText = document.createTextNode(newId);
        document.body.appendChild(idText);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        let textError = document.createTextNode(error.message);
        document.body.appendChild(textError);
      });
  }
  