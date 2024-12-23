<!-- ab email ki further validation ka option dena hai ki kis kis domain ke sath hi valid ho 
jn-input-wrap bhi instance me pass karna hia and upar se hatana hai 
values fill hote hi error remove ho jaye 
date  ke liye validation ki kab se kab tak ki date valid ho sake  -->


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Home Page | Boom My Events</title>

    <link rel="stylesheet" href="./assets/css/theme-style.css" />
  </head>

  <body>
    <!-- This form validation script is very easy to use. Simply pass a specific class to your form elements, and watch the magic happen. 
    Here are the steps and conditions for proper validation:

    1. Wrapper Class:
        - Wrap all your form fields in a `div` or `label`. We prefer label for better output.
        - Assign the class `jn-input-wrap` to these wrappers.

    2. Field-Specific Conditions:
        - Text, Search, Color, Select Fields:
            - These fields are checked for non-emptiness. If any of these fields are empty, an error will be displayed.
        - Checkbox and Radio Fields:
            - Errors will be shown if these fields are not checked.
            - Note: For `input:radio` and `input:checkbox`, the `name` attribute is mandatory since validation is based on the name attribute.
        - Phone Number:
            - The phone number field must be exactly 10 digits long.
            - The field must not be empty.
        - Email:
            - The email field requires a valid email address format.
            - The email must include an '@' symbol and a domain (e.g., example.com).
        - URL:
            - The URL field must contain a proper URL, starting with 'https'.

    3. General Note:
        - Make sure that each field is correctly wrapped and the `jn-input-wrap` class is applied to ensure the validation works as expected.

    By following these guidelines, you can ensure that your form fields are validated correctly, providing a seamless user experience. -->

    <h1 style="text-align: center">Form Validation</h1>

    <section>
      <div class="container">
        <form action="" class="jnForm">
          <label class="jn-input-wrap w-50">
            <input type="text" placeholder="Name" />
          </label>

          <label class="jn-input-wrap w-50">
            <input type="email" placeholder="Email" />
          </label>

          <label class="jn-input-wrap w-50">
            <input type="tel" placeholder="Phone" />
          </label>

          <label class="jn-input-wrap w-50">
            <input type="number" placeholder="Number"/>
          </label>

          <label class="jn-input-wrap w-50">
            <input type="password" placeholder="Password"/>
          </label>

          <label class="jn-input-wrap w-50">
            <input type="search" placeholder="Search"/>
          </label>

          <label class="jn-input-wrap w-50">
            <select name="" id="" type="select-one">
              <option value="">One</option>
              <option value="1">Two</option>
              <option value="2">three</option>
            </select>
          </label>

          <label class="jn-input-wrap w-50">
            <input type="url" placeholder="URL" />
          </label>

          <label class="jn-input-wrap w-33">
            <input type="color" placeholder="Color" />
          </label>

          <label class="jn-input-wrap w-33">
            <input type="date" placeholder="Date" />
          </label>

          <label class="jn-input-wrap w-33">
            <input type="time" placeholder="Time" />
          </label>

          
          <label class="jn-input-wrap w-50">
            <input type="month" placeholder="Date" />
          </label>

          <label class="jn-input-wrap w-50">
            <input type="week" placeholder="Time" />
          </label>

          <label class="jn-input-wrap w-50">
            <input type="file" placeholder="File"/>
            <div class="fileDesign">Upload Your File</div>
          </label>

          <label class="jn-input-wrap w-50">
            <textarea name="" id="" type="textarea"></textarea>
          </label>
          
          <label class="jn-input-wrap w-100">
            <input type="range" placeholder="Range" min="0" max="50" />
          </label>

          <label class="jn-input-wrap w-100">
            <input type="checkbox" name="hobbies" />
            This is Checkbox &nbsp;&nbsp;&nbsp;
            <input type="checkbox" name="hobbies" />
            This is Checkbox &nbsp;&nbsp;&nbsp;
            <input type="checkbox" name="hobbies" />
            This is Checkbox &nbsp;&nbsp;&nbsp;
          </label>

          <label class="jn-input-wrap w-100">
            <input type="radio" name="gender" /> Male &nbsp;&nbsp;&nbsp;
            <input type="radio" name="gender" /> Female
          </label>

          <label class="jn-input-wrap w-100">
            <input type="submit" value="Submit" />
          </label>
        </form>
      </div>
    </section>

    <!-- <section>
        <div class="container">
          <form action="" class="jnForm">
            <label class="jn-input-wrap w-50">
              <input type="text" placeholder="Name" />
            </label>
  
            <label class="jn-input-wrap w-50">
              <input type="email" placeholder="Email" />
            </label>
  
            <label class="jn-input-wrap w-50">
              <input type="tel" placeholder="Phone" />
            </label>
  
            <label class="jn-input-wrap w-50">
              <input type="number" placeholder="Number"/>
            </label>
  
            <label class="jn-input-wrap w-50">
              <input type="password" placeholder="Password"/>
            </label>
  
            <label class="jn-input-wrap w-50">
              <input type="search" placeholder="Search"/>
            </label>
  
            <label class="jn-input-wrap w-50">
              <select name="" id="" type="select-one">
                <option value="">One</option>
                <option value="1">Two</option>
                <option value="2">three</option>
              </select>
            </label>
  
            <label class="jn-input-wrap w-50">
              <input type="url" placeholder="URL" />
            </label>
  
            <label class="jn-input-wrap w-33">
              <input type="color" placeholder="Color" />
            </label>
  
            <label class="jn-input-wrap w-33">
              <input type="date" placeholder="Date" />
            </label>
  
            <label class="jn-input-wrap w-33">
              <input type="time" placeholder="Time" />
            </label>
  
            <label class="jn-input-wrap w-50">
              <input type="file" placeholder="File"/>
              <div class="fileDesign">Upload Your File</div>
            </label>
  
            <label class="jn-input-wrap w-50">
              <textarea name="" id="" type="textarea"></textarea>
            </label>
  
            <label class="jn-input-wrap w-100">
              <input type="checkbox" name="hobbies" />
              This is Checkbox &nbsp;&nbsp;&nbsp;
              <input type="checkbox" name="hobbies" />
              This is Checkbox &nbsp;&nbsp;&nbsp;
              <input type="checkbox" name="hobbies" />
              This is Checkbox &nbsp;&nbsp;&nbsp;
            </label>
  
            <label class="jn-input-wrap w-100">
              <input type="radio" name="gender" /> Male &nbsp;&nbsp;&nbsp;
              <input type="radio" name="gender" /> Female
            </label>
  
            <label class="jn-input-wrap w-100">
              <input type="submit" value="Submit" />
            </label>
          </form>
        </div>
      </section> -->

    <!-- <script src="./assets/js/function.js"></script> -->
    <script src="./assets/js/jn.formvalidation.js"></script>

    <script>
      
        // Create an instance with nested objects
        const jn_validation = new JnFormValidation({
            showErrorMessages: true,
            formClass: '.jnForm',
            errorMessages: {
                email: "Please enter a valid email addressdfsgfd.",
                text: "Please enter some text.",
            }
        });

    </script>
  </body>
</html>