import React, { useState, useContext } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import serverAPI from '../hooks/useAxios'
import { authContext } from '../context/AuthContext'
import { toast } from 'react-toastify'

export const SigninModalForm = ({ setOpenSigninModal, setOpenSignupModal }) => {
  const navigate = useNavigate()
  const [signInError, setSignInError] = useState(false)
  const { setAuth } = useContext(authContext)

  const signIn = (user) => {
    serverAPI.post('/users/signin', user).then((response) => {
      if (!response.data.success) {
        setSignInError(true)
      } else {
        setAuth((prev) => ({
          ...prev,
          isLoggedIn: true,
          user: response.data.user,
        }))
        navigate('/home ')
        toast.success(`Signed in. Welcome! 😊`, {
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      }
    })
  }

  const handleSubmit = (formInfo) => {
    const user = {
      email: formInfo.email,
      password: formInfo.password,
    }
    signIn(user)
  }

  const handleLoginAsAGuest = () => {
    const user = {
      email: 'ben@demo.com',
      password: 'password66',
    }
    signIn(user)
  }

  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email required'),
    password: Yup.string().required('Password required'),
  })

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleSubmit(values)
          setSubmitting(false)
          resetForm()
        }}
      >
        <Form
          onChange={() => {
            setSignInError(false)
          }}
        >
          <div className="flex flex-col w-full gap-4 px-3">
            <h1 className="text-xl font-semibold text-gray-800">
              Sign in to Taskly
            </h1>

            <div className="w-full ">
              <Field name="email">
                {({ field, meta }) => {
                  return (
                    <div className="w-full">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-semibold"
                      >
                        Your email
                      </label>
                      <input
                        {...field}
                        type="text"
                        id="email"
                        placeholder="name@example.com"
                        className="w-full rounded-lg"
                        autoComplete="new-email"
                      />
                      {meta.touched && meta.error ? (
                        <div className="mt-2 text-sm font-semibold text-red-400">
                          {meta.error}
                        </div>
                      ) : null}
                    </div>
                  )
                }}
              </Field>
            </div>

            <div className="w-full ">
              <Field name="password">
                {({ field, meta }) => {
                  return (
                    <div className="w-full">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-semibold"
                      >
                        Your password
                      </label>
                      <input
                        {...field}
                        type="password"
                        id="password"
                        placeholder="********"
                        className="w-full rounded-lg"
                        autoComplete="new-password"
                      />
                      {meta.touched && meta.error ? (
                        <div className="mt-2 text-sm font-semibold text-red-400">
                          {meta.error}
                        </div>
                      ) : null}
                    </div>
                  )
                }}
              </Field>
            </div>

            {signInError ? (
              <div className="text-center text-red-600">
                Email or password does not match
              </div>
            ) : null}

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
            >
              Login to your account
            </button>

            <div className="flex justify-between">
              <div>
                <span className="text-gray-400">Not registered? </span>
                <span
                  className="font-semibold text-blue-400 cursor-pointer hover:underline hover:text-blue-600"
                  onClick={() => {
                    setOpenSigninModal(false)
                    setOpenSignupModal(true)
                  }}
                >
                  Signup here
                </span>
              </div>
              <span
                className="px-4 py-2 text-sm font-medium text-center text-white rounded-full cursor-pointer bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleLoginAsAGuest}
              >
                Login as a guest
              </span>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
