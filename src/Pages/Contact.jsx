import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
};
export const Contact = () => {
  return (
    <>
      <section className="containersection-contact">
        <div className="container">
          <h2 className="section-common--heading">contact us</h2>
          <p className="section-common--subheading">
            Get in touch with us. We are always here to help you.
          </p>
        </div>
        <div className="grid grid-two--cols">
          <div className="contact-contact">
            <Form method=" POST" action="/contact">
              <div className="grid grid-two-cols mb-3">
                <div>
                  <label htmlFor="username">full name</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    autoComplete="off"
                    placeholder="enter full name"
                  />
                </div>
                <div>
                  <label htmlFor="email">email address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="off"
                    placeholder="abc@thapa.com"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="we are always here to help you."
                ></textarea>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};
