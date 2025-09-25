import { useState } from "react";

const AddComment = ({ asin, addComment }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);

  const inputChange = (e) => {
    const { name, value } = e.target;
    name === "comment" ? setComment(value) : setRate(value);
  };

  const invio = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGQxM2I5OTVkYmNlZDAwMTUzNDUwMWMiLCJpYXQiOjE3NTg1NDI3NDUsImV4cCI6MTc1OTc1MjM0NX0.E0iCKHg-DZHAD_VqhrakcXBc9yg7sslnIhpqpW2Bndo",
        },
        body: JSON.stringify({
          comment,
          rate: parseInt(rate),
          elementId: asin,
        }),
      });

      if (!response.ok) {
        throw new Error("Commento non salvato");
      }

      const newComment = await response.json();
      addComment(newComment);
      setComment("");
      setRate(1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="text-center mt-5" onSubmit={invio}>
      <div>
        <input
          className="border border-secondary rounded-2"
          type="text"
          name="comment"
          value={comment}
          onChange={inputChange}
          placeholder=" Scrivi un commento"
          required
        />
        <select
          className="ms-2 bg-danger border-3 border-danger rounded-2 text-white"
          name="rate"
          value={rate}
          onChange={inputChange}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="bg-danger border-0 rounded-2 text-white px-3 my-3">
        Invia
      </button>
    </form>
  );
};

export default AddComment;
