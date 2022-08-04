import React, { useState, useContext } from 'react'
import { Transition } from '@headlessui/react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import serverAPI from '../hooks/useAxios'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../context/AuthContext'

export const SignupModal = ({
  openSignupModal,
  setOpenSigninModal,
  setOpenSignupModal,
}) => {
  const [emailIsTaken, setEmailIsTaken] = useState(false)
  const navigate = useNavigate()
  const { setAuth } = useContext(authContext)

  const signUp = (user) => {
    serverAPI
      .post('/users/newAdmin', user)
      .then((response) => {
        if (response && response.data.success) {
          // localStorage.setItem('tasklyUser', JSON.stringify(response.data.user))
          setAuth(response.data.user)
          navigate('/client')
          // console.log('signup page', response.data.user)
          // console.log('Successfully created account')
        }
      })
      .catch((err) => {
        if (err && err.response.status === 403) {
          setEmailIsTaken(true)
        }
      })
  }

  const handleSubmit = (formInfo) => {
    const user = {
      email: formInfo.email,
      first_name: formInfo.firstName,
      last_name: formInfo.lastName,
      password: formInfo.password,
      company_name: formInfo.companyName,
    }
    signUp(user)
  }

  const initialValues = {
    email: '',
    password: '',
    passwordConfirmation: '',
    companyName: '',
    firstName: '',
    lastName: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email required'),
    password: Yup.string().required('Password required'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must be matching')
      .required('Confirm password required'),
    companyName: Yup.string().required('Company name required'),
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
  })

  return (
    <Transition
      as="div"
      show={openSignupModal}
      enter="transform transition duration-[400ms]"
      enterFrom="opacity-0 scale-50"
      enterTo="opacity-100 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 scale-100 translate-x-0"
      leaveTo="opacity-0 scale-95 -translate-x-full"
    >
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
              setEmailIsTaken(false)
            }}
          >
            <div className="flex flex-col w-full gap-4 px-3">
              <h1 className="text-xl font-semibold text-gray-800">
                Create a Taskly account
              </h1>

              <div className="w-full ">
                <Field name="companyName">
                  {({ field, meta }) => {
                    return (
                      <div className="w-full">
                        <label
                          htmlFor="company-name"
                          className="block mb-2 text-sm font-semibold"
                        >
                          Company name
                        </label>
                        <input
                          {...field}
                          type="text"
                          id="company-name"
                          placeholder="Company Inc."
                          className="w-full rounded-lg"
                          autoComplete="new-company-name"
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
                <Field name="firstName">
                  {({ field, meta }) => {
                    return (
                      <div className="w-full">
                        <label
                          htmlFor="first-name"
                          className="block mb-2 text-sm font-semibold"
                        >
                          First name
                        </label>
                        <input
                          {...field}
                          type="text"
                          id="first-name"
                          placeholder="First Name"
                          className="w-full rounded-lg"
                          autoComplete="new-first-name"
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
                <Field name="lastName">
                  {({ field, meta }) => {
                    return (
                      <div className="w-full">
                        <label
                          htmlFor="last-name"
                          className="block mb-2 text-sm font-semibold"
                        >
                          Last name
                        </label>
                        <input
                          {...field}
                          type="text"
                          id="last-name"
                          placeholder="Last Name"
                          className="w-full rounded-lg"
                          autoComplete="new-last-name"
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
                <Field name="email">
                  {({ field, meta }) => {
                    return (
                      <div className="w-full">
                        {emailIsTaken ? (
                          <div>
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-semibold text-red-700 dark:text-red-500"
                            >
                              Your email
                            </label>
                            <input
                              {...field}
                              type="text"
                              id="email"
                              placeholder="name@example.com"
                              className="block w-full text-sm text-red-900 placeholder-red-700 border border-red-500 rounded-lg bg-red-50 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400 "
                              autoComplete="new-email"
                            />
                            <div className="mt-2 text-sm font-semibold text-red-400">
                              This email is already taken.
                            </div>
                          </div>
                        ) : (
                          <div>
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
                        )}
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

              <div className="w-full ">
                <Field name="passwordConfirmation">
                  {({ field, meta }) => {
                    return (
                      <div className="w-full">
                        <label
                          htmlFor="password-confirmation"
                          className="block mb-2 text-sm font-semibold"
                        >
                          Confirm password
                        </label>
                        <input
                          {...field}
                          type="password"
                          id="password-confirmation"
                          placeholder="********"
                          className="w-full rounded-lg"
                          autoComplete="new-password-confirmation"
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

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
              >
                Create account
              </button>

              <div>
                <span className="text-gray-400">Already registered? </span>
                <span
                  className="font-semibold text-blue-400 cursor-pointer hover:underline hover:text-blue-600"
                  onClick={() => {
                    setOpenSignupModal(false)
                    setOpenSigninModal(true)
                  }}
                >
                  Login here
                </span>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </Transition>
  )
}
