import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import auth from "../firebase/firebase.config";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const handleUpdateProfile = () => {
    const user = auth.currentUser;

    if (user) {
      user
        .updateProfile({
          displayName: displayName,
          photoUrl: photoURL,
        })
        .then(() => {
          console.log("Profile Updated Successfully !!");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.error("user not found");
    }
  };
  console.log(user);
  return (
    <div className="mx-10 mt-10 md:mx-24 lg:mx-28 text-center items-center flex flex-col justify-center">
      <h2 className="text-2xl font-bold pb-10">Update Profile :</h2>
      <div className=" min-h-screen ">
        <img
          className="w-80 h-80 rounded-full mb-5"
          src={user.photoURL}
          alt=""
        />
        <hr />
        <div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder={user.email}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder=""
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button
                  onClick={handleUpdateProfile}
                  className="btn bg-sky-900 text-white"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
