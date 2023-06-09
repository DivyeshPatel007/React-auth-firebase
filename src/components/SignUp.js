import React, { useRef } from 'react'
import { Card, Button, Form } from 'react-bootstrap'
function SignUp() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()


    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">
                        Sign Up
                    </h2>
                    <Form>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' required ref={emailRef} />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' required ref={passwordRef} />
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type='password' required ref={passwordConfirmRef} />
                        </Form.Group>
                        <Button type='submit' className='w-100'>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Log In.
            </div>
        </>
    )
}

export default SignUp