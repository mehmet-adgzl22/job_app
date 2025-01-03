import { statusOpt, typeOpt } from "../../constants";
import Input from "./Input";
import Select from "./Select";
import "./create.scss";
import api from "../../api/index";
import { useDispatch } from "react-redux";
import { createJob } from "../../redux/slices/jobSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const jobData = Object.fromEntries(formData.entries());

    jobData.date = Date.now();

    api
      .post("/jobs", jobData)
      .then((res) => {
        dispatch(createJob(res.data));
        navigate("/");
        toast.success("İş Başarıyla Eklendi");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("İş Eklenirken Bir Sorun Oluştu !");
      });
  };

  return (
    <div className="add-page">
      <section className="container">
        <h2>Yeni İş Ekle</h2>

        <form onSubmit={handleSubmit}>
          <Input label="Pozison" name="position" />
          <Input label="Şirket" name="company" />
          <Input label="Lokasyon" name="location" />
          <Select label="Durum" name="status" options={statusOpt} />
          <Select label="Tür" name="type" options={typeOpt} />

          <div className="btn-wrapper">
            <button className="btn-shine">
              <span>Gönder</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Create;
