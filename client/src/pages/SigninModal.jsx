import React from 'react'
import { Transition } from '@headlessui/react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

export const SigninModal = ({ setOpenSigninModal, setOpenSignupModal }) => {
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
    // <Transition
    //   as="div"
    //   show={showPageOne}
    //   enter="transform transition duration-[400ms]"
    //   enterFrom="opacity-0 scale-50"
    //   enterTo="opacity-100 scale-100"
    //   leave="transform duration-200 transition ease-in-out"
    //   leaveFrom="opacity-100 scale-100 translate-x-0"
    //   leaveTo="opacity-0 scale-95 -translate-x-full"
    // >
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false)
          resetForm()
        }}
      >
        <Form>
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
              Login to your account
            </button>

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
          </div>
        </Form>
      </Formik>
    </div>
    // </Transition>
  )
}
