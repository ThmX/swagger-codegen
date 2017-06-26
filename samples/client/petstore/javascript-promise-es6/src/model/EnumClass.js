/**
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';


/**
* Enum class EnumClass.
* @enum {}
* @readonly
*/
export default class EnumClass {
    
        /**
         * value: "_abc"
         * @const
         */
        _abc = "_abc";

    
        /**
         * value: "-efg"
         * @const
         */
        -efg = "-efg";

    
        /**
         * value: "(xyz)"
         * @const
         */
        (xyz) = "(xyz)";

    

    /**
    * Returns a <code>EnumClass</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EnumClass} The enum <code>EnumClass</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}


