"use client";

import { useRouter } from "next/navigation";

function CreateBook() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const auth = formData.get("auth");
    const photo = formData.get("imageUrl");

    try {
      await fetch(
        "https://json-api.uz/api/project/Kitoblar%20Markazi/books",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, auth, photo }),
        }
      );

      // Ma'lumotlar qo'shilgandan keyin Books sahifasiga o'tish
      router.push("/");
    } catch (error) {
      console.error("Ma'lumotlarni qo'shishda xatolik yuz berdi:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Kitob</h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 flex flex-col items-center"
      >
        <CreateInput
          name="title"
          label="Kitob nomi"
          type="text"
          placeholder="Kitob nomini kiriting..."
        />
        <CreateInput
          name="auth"
          label="Muallif"
          type="text"
          placeholder="Muallifni kiriting..."
        />
        <CreateInput
          name="imageUrl"
          label="Rasm URL"
          type="text"
          placeholder="https://kitobxon.com/"
        />
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text ">Kitob haqida qisqacha</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full max-w-xs"
            placeholder="Ushbu kitobdan olgan hulosalarim shundan iboratki ...."
          ></textarea>
        </div>
        <div className="flex justify-between w-full gap-1">
          <button className="btn text-[#fff] bg-black hover:bg-black">
            Qo'shish
          </button>
          <button
            type="submit"
            className="btn text-[#000] bg-white hover:bg-white"
          >
            Ko'rib chiqish
          </button>
        </div>
      </form>
    </div>
  );
}

function CreateInput({ name, label, type, placeholder }) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
        name={name}
      />
    </div>
  );
}

export default CreateBook;
