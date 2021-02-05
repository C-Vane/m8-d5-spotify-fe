import React from "react";
import { Col, Button, Form } from "react-bootstrap";

function SingInPage() {
  return (
    <div className="container_sign_in">
      <Col className="main_sing_in pt-3">
        <div className="text-center">
          <img
            src="data:image/png;base64,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"
            alt="spotify logo"
            className="sign_logo"
          />
        </div>
        <span>
          <h3 className="text-center sign_title mb-4">
            Sing up for free to start listening.
          </h3>
        </span>
        <button id="sing_in_with_fb" href="#" className="col-12">
          SIGN UP WITH FACEBOOK
        </button>
        <div className="hrs">
          <div className="hr"></div>
          <p className="ml-3 mr-3">or</p>
          <div className="hr"></div>
        </div>
        <div className="text-center mt-3 mb-3">
          Sing up with your email address
        </div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>What's your email?</Form.Label>
            <Form.Control type="email" placeholder="Enter your email." />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Confirm your email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email again." />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Create a password</Form.Label>
            <Form.Control type="password" placeholder="Create a password." />
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>What should we call you?</Form.Label>
            <Form.Control type="name" placeholder="Enter a profile name." />
            <h6>This appears on your profile.</h6>
          </Form.Group>

          <Form.Label>What's your date of birth?</Form.Label>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridDay">
              <Form.Label>Day</Form.Label>
              <Form.Control placeholder="DD" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMonth">
              <Form.Label>Month</Form.Label>
              <Form.Control as="select" defaultValue="Month">
                <option>Month</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridYear">
              <Form.Label>Year</Form.Label>
              <Form.Control placeholder="YYYY" />
            </Form.Group>
          </Form.Row>

          <Form.Label>What's your gender?</Form.Label>
          <div className="my_checkbox">
            <Form.Group controlId="formBasicRadio" className="mr-3">
              <Form.Check
                inline
                type="radio"
                label="Male"
                id="custom-inline-radio-1"
              />
            </Form.Group>
            <Form.Group controlId="formBasicRadio" className="mr-3">
              <Form.Check
                inline
                type="radio"
                label="Female"
                id="custom-inline-radio-1"
              />
            </Form.Group>
            <Form.Group controlId="formBasicRadio" className="mr-3">
              <Form.Check
                inline
                type="radio"
                label="Non-binary"
                id="custom-inline-radio-1"
              />
            </Form.Group>
          </div>
          <Form.Group controlId="formBasicCheckbox" id="formBasicCheckbox">
            <div>
              <Form.Check
                inline
                type="checkbox"
                label=""
                id="custom-inline-checkbox-1"
              />
            </div>
            <div>
              Share my registration data with Spotify's content providers for
              marketing purposes. Note that your data may be transferred to a
              country outside of the EEA as described in our privacy policy.
            </div>
          </Form.Group>

          <small>
            By clicking on Sign up, you agree to Spotify's Terms and Conditions
            of Use. To learn more about how Spotify collects, uses, shares and
            protects your personal data please read Spotify's{" "}
            <g>Privacy Policy</g>.
          </small>

          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
          <button
            id="sing_in"
            href="/login.html"
            className="col-12 mt-2"
            type="submit"
          >
            SIGN UP
          </button>

          <div className="text-center mb-3">Have an account? Log in.</div>
        </Form>
      </Col>
    </div>
  );
}

export default SingInPage;
