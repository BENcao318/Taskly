import React from 'react'
import { Transition } from '@headlessui/react'
import { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Label, TextInput } from 'flowbite-react'

export const SignupModal = () => {
  const [showPageOne, setShowPageOne] = useState(true)
  const [showPageTwo, setShowPageTwo] = useState(false)
  const timer = useRef(null)

  const initialValues = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    companyName: '',
    companyLogo: '',
    companyTheme: '',
  }

  const validationSchema = Yup.object({
    username: Yup.string().required('Username required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email required'),
    password: Yup.string().required('Password required'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must be matching')
      .required('Confirm password required'),
    companyName: Yup.string().required('Company name required'),
    companyLogo: Yup.string().required('Company logo required'),
    companyTheme: Yup.string().required('Company theme required'),
  })

  //todo
  const handleNextForm = () => {}
  const handleSubmit = () => {}

  useEffect(() => {
    return () => clearTimeout(timer.current)
  }, [timer])

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <Transition
          as="div"
          show={showPageOne}
          enter="transform transition duration-[400ms]"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 scale-100 translate-x-0"
          leaveTo="opacity-0 scale-95 -translate-x-full"
        >
          <div className="flex flex-col items-center">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                handleNextForm(values)
                setSubmitting(false)
              }}
            >
              <Form className="text-center">
                <div className="flex flex-col items-center justify-center px-2 mx-auto">
                  <div className="w-full px-6 py-6 text-black rounded-lg shadow-lg bg-emerald-400">
                    <h1 className="mb-8 text-2xl font-semibold text-center text-gray-800">
                      Account info 🧑‍🚀
                    </h1>

                    <div className="w-full p-3">
                      <Field name="username">
                        {({ field, meta }) => {
                          return (
                            <div>
                              <div className="block mb-2">
                                <Label
                                  htmlFor="username3"
                                  color="green"
                                  value="Company name"
                                />
                              </div>
                              <TextInput
                                {...field}
                                id="username"
                                placeholder="Bonnie Green"
                                required={true}
                                color="green"
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

                    <div className="w-full p-3">
                      <Field name="email">
                        {({ field, meta }) => {
                          return (
                            <div>
                              <input
                                {...field}
                                type="text"
                                autoComplete="new-email"
                                className="block w-full p-2 font-medium border rounded border-grey-light focus:outline-none focus:ring focus:ring-sky-600"
                                placeholder="Email"
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

                    <div className="w-full p-3">
                      <Field name="password">
                        {({ field, meta }) => {
                          return (
                            <div>
                              <input
                                {...field}
                                type="password"
                                autoComplete="new-password"
                                className="block w-full p-2 font-medium border rounded border-grey-light focus:outline-none focus:ring focus:ring-sky-600"
                                placeholder="Password"
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

                    <div className="w-full p-3">
                      <Field name="passwordConfirmation">
                        {({ field, meta }) => {
                          return (
                            <div>
                              <input
                                {...field}
                                type="password"
                                autoComplete="new-password"
                                className="block w-full p-2 font-medium border rounded border-grey-light focus:outline-none focus:ring focus:ring-sky-600"
                                placeholder="Confirm password"
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
                  </div>
                </div>
              </Form>
            </Formik>

            <button
              onClick={() => {
                setShowPageOne(false)
                timer.current = setTimeout(() => setShowPageTwo(true), 600)
              }}
              className="px-4 py-2 mt-8 text-sm font-medium text-white transition transform bg-black rounded-md backface-visibility-hidden bg-opacity-20 hover:scale-105 hover:bg-opacity-30 focus:outline-none active:bg-opacity-40"
            >
              <span className="text-lg text-white">Next</span>
            </button>
          </div>
        </Transition>
      </div>
    </div>
  )
}
