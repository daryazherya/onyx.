import Button from "@mui/material/Button";

const FormButton = (postFormData, setPreloader) => {
    return (
        <Button
            onClick={() => {
                setPreloader(true);
                postFormData();
            }}
            sx={{
                fontSize: 12,
                height: 40,
                alignSelf: "center",
                marginLeft: 2,
                backgroundColor: "#665995",
            }}
            variant="contained"
        >
            Показать
        </Button>
    );
};

export default FormButton;
