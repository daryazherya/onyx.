const postFormData = (api, formData, setLoad, setPeriod) => {
    fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    })
        .then((res) => {
            // console.log(res);
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            setLoad(false);
            setPeriod(data);
        });
};

export default postFormData;
