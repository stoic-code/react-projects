import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function CreateProduct() {
  const initialState = {
    name: "",
    price: "",
    description: "",
    categories: [""],
    images: [],
  };
  const [productData, setProductData] = useState(initialState);

  //error section in form credentials

  const [errorData, setErrorData] = useState({});

  function handleCreateProduct(e) {
    setErrorData({});
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", productData.name);
    formData.append("price", productData.price);
    formData.append("description", productData.description);
    for (let i = 0; i < productData.images.length; i++) {
      formData.append("images[]", productData.images[i]);
    }
    productData.categories.forEach((category) => {
      formData.append("categories[]", category);
    });

    axios
      .post("https://ecommerce-sagartmg2.vercel.app/api/products", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => toast("Product Created Successfully"))
      .catch((Err) => {
        console.log(Err.response.data.errors);
        // console.log(Err);

        if (Err.response.request.status) {
          const errorArray = Err.response.data.errors;
          console.log(errorArray);
          const temp = {};
          errorArray.forEach((error) => {
            // console.log(error);
            temp[error.param] = error.msg;
          });
          setErrorData(temp);
        } else {
          toast("Something went wrong");
        }
      });

    if (
      errorData.name ||
      errorData.price ||
      errorData.description ||
      errorData.categories ||
      errorData.images
    ) {
      toast("Fill up the form correctly");
    } else {
      setProductData(initialState);
    }
  }
  console.log(errorData);

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
    setErrorData({ ...errorData, [e.target.name]: "" });
  };

  const handleAddCategory = () => {
    setProductData({
      ...productData,
      categories: [...productData.categories, ""],
    });
  };

  console.log(productData);

  return (
    <>
      <ToastContainer />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your own Product
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            onSubmit={(e) => handleCreateProduct(e)}
            method="POST"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="name"
                  type="text"
                  value={productData.name}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <small className="text-red-800">{errorData.name}</small>
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Price
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="price"
                  type="number"
                  value={productData.price}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <small className="text-red-900 ">{errorData.price}</small>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Category{" "}
                <button
                  onClick={() => handleAddCategory()}
                  type="button"
                  className=" p-1  rounded-md bg-myBlue px-2  shadow-purple-400 shadow-md"
                >
                  {" "}
                  Add
                </button>
              </label>
              <div className="mt-2 ">
                {productData.categories.map((category, index) => (
                  <>
                    <div className="flex gap-2 items-center">
                      <input
                        key={productData.id}
                        onChange={(e) => {
                          let temp = [...productData.categories]; //all arrays data of categories were copied to temp
                          temp[index] = e.target.value; //temp[index] is the value of the category at that index
                          setProductData({ ...productData, categories: temp });
                        }}
                        name="name"
                        type="text"
                        value={category}
                        className="  px-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <button
                        onClick={(e) => {
                          const temp = [...productData.categories];
                          temp.splice(index, 1);
                          setProductData({ ...productData, categories: temp });
                        }}
                        className="p-1 text-white  bg-red-600 rounded-md "
                      >
                        Delete
                      </button>
                    </div>
                  </>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <textarea
                  onChange={(e) => {
                    setProductData({
                      ...productData,
                      description: e.target.value,
                    });
                  }}
                  name="description"
                  type="text"
                  value={productData.description}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Role
              </label>
              <div className="mt-2">
                <input
                  id="role"
                  name="role"
                  type="text"
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Add Image
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setProductData({ ...productData, images: e.target.files });
                  }}
                  name="image"
                  type="file"
                  className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex shadow-purple-400 shadow-md w-full justify-center rounded-md bg-myBlue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-myPink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-myPink"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateProduct;
