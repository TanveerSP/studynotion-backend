// import { useState } from "react"
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
// import { useDispatch } from "react-redux"
// import { Link, useNavigate } from "react-router-dom"

// import { login } from "../../../services/operations/authAPI"

// function LoginForm() {
//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//     })

//     const [showPassword, setShowPassword] = useState(false)

//     const { email, password } = formData

//     const handleOnChange = (e) => {
//         setFormData((prevData) => ({
//             ...prevData,
//             [e.target.name]: e.target.value,
//         }))
//     }

//     const handleOnSubmit = (e) => {
//         e.preventDefault()
//         dispatch(login(email, password, navigate))
//     }

//     return (
//         <>
//         <form
//             onSubmit={handleOnSubmit}
//             className="mt-6 flex w-full flex-col gap-y-4"
//         >
//             <label className="w-full">
//                 <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//                     Email Address <sup className="text-pink-200">*</sup>
//                 </p>
//                 <input
//                     required
//                     type="text"
//                     name="email"
//                     value={email}
//                     onChange={handleOnChange}
//                     placeholder="Enter email address"
//                     style={{
//                         boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                     }}
//                     className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
//                 />
//             </label>
//             <label className="relative">
//                 <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//                     Password <sup className="text-pink-200">*</sup>
//                 </p>
//                 <input
//                     required
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     value={password}
//                     onChange={handleOnChange}
//                     placeholder="Enter Password"
//                     style={{
//                         boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//                     }}
//                     className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
//                 />
//                 <span
//                     onClick={() => setShowPassword((prev) => !prev)}
//                     className="absolute right-3 top-[38px] z-[10] cursor-pointer"
//                 >
//                     {showPassword ? (
//                         <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//                     ) : (
//                         <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//                     )}
//                 </span>
//                 <Link to="/forgot-password">
//                     <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
//                         Forgot Password
//                     </p>
//                 </Link>
//             </label>
//             <button
//                 type="submit"
//                 className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
//             >
//                 Sign In
//             </button>
//         </form>
//         </>
//     )
// }

// export default LoginForm

import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { login } from "../../../services/operations/authAPI"

// react icons
import { PiStudentBold } from "react-icons/pi";
import { GrUserManager } from "react-icons/gr";

function LoginForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [showPassword, setShowPassword] = useState(false)

    const { email, password } = formData

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(login(email, password, navigate))
    }

    const handleDemoLogin = (role) => {
        const demoCredentials = {
            instructor: {
                email: "thomsshelby0101@gmail.com",
                password: "123123",
            },
            student: {
                email: "usertestingweb1@gmail.com",
                password: "123123",
            },
        }

        const { email, password } = demoCredentials[role]
        setFormData({ email, password })

        // Allow formData to update before dispatching login
        setTimeout(() => {
            dispatch(login(email, password, navigate))
        }, 0)
    }

    return (
        <>
            <form
                onSubmit={handleOnSubmit}
                className="mt-6 flex w-full flex-col gap-y-4"
            >
                <label className="w-full">
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                        Email Address <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        required
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        placeholder="Enter email address"
                        style={{
                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                        }}
                        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    />
                </label>
                <label className="relative">
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                        Password <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        required
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={password}
                        onChange={handleOnChange}
                        placeholder="Enter Password"
                        style={{
                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                        }}
                        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
                    />
                    <span
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                    >
                        {showPassword ? (
                            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                        ) : (
                            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                        )}
                    </span>
                    <Link to="/forgot-password">
                        <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
                            Forgot Password
                        </p>
                    </Link>
                </label>
                <button
                    type="submit"
                    className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
                >
                    Sign In
                </button>
            </form>

            <div className="mt-4 bg-richblack-800 border-[1px] border-richblack-700 rounded-md px-2 py-3" >
                <h3 className="text-white text-center text-2xl font-semibold ">
                    Take a Demo
                </h3>
                <div className="mt-4 flex justify-between">
                    <button
                        onClick={() => handleDemoLogin('instructor')}
                        className="rounded-[8px] bg-yellow-50 border-[1px] border-richblack-700 py-[8px] px-[12px] font-semibold text-richblack-800"
                    >
                        <div className="flex gap-2 items-center">
                            Demo Instructor<GrUserManager size={20} />
                        </div>
                    </button>
                    <button
                        onClick={() => handleDemoLogin('student')}
                        className="rounded-[8px]  bg-yellow-50 border-[1px] border-richblack-700 py-[8px] px-[12px] text-richblack-800 font-semibold"
                    >
                        <div className="flex gap-2 items-center">
                            Demo Student <PiStudentBold size={20} />
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default LoginForm