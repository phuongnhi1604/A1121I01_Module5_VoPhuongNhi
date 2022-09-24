package com.furama.furamamodule5.dto;

import com.furama.furamamodule5.entity.CustomerType;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class CustomerDto {
    private int customer_id;

    @NotBlank(message = "Không được để trống")
    @Pattern(regexp = "^KH-[0-9]{4}$", message = "Mã chưa đúng định dạng KH-XXXX")
    private String customer_code;
    private CustomerType customerType;

    @NotBlank(message = "Không được để trống")
    @Pattern(regexp = "[a-zA-Z\\s]{2,50}", message = "Tên chứa kí tự khác hoặc quá dài")
    private String customer_name;
    private String customer_birthday;
    private boolean customer_gender;
    @NotBlank(message = "Không được để trống")
    @Pattern(regexp = "^[0-9]{10,12}$", message = "CMND chưa đúng định dạng")
    private String customer_id_card;

    @NotBlank(message = "Không được để trống")
    @Pattern(regexp = "^(84|0)9([0|1])[0-9]{7}$", message = "SĐT chưa đúng định dạng")
    private String customer_phone;

    @NotBlank(message = "Không được để trống")
    @Pattern(regexp = "(\\W|^)[\\w.+\\-]*@gmail\\.com(\\W|$)", message = "Email chưa đúng định dạng")
    private String customer_email;

    @NotBlank(message = "Không được để trống")
    private String customer_address;

    public CustomerDto() {
    }

    public int getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }

    public String getCustomer_code() {
        return customer_code;
    }

    public void setCustomer_code(String customer_code) {
        this.customer_code = customer_code;
    }

    public CustomerType getCustomerType() {
        return customerType;
    }

    public void setCustomerType(CustomerType customerType) {
        this.customerType = customerType;
    }

    public String getCustomer_name() {
        return customer_name;
    }

    public void setCustomer_name(String customer_name) {
        this.customer_name = customer_name;
    }

    public String getCustomer_birthday() {
        return customer_birthday;
    }

    public void setCustomer_birthday(String customer_birthday) {
        this.customer_birthday = customer_birthday;
    }

    public boolean getCustomer_gender() {
        return customer_gender;
    }

    public void setCustomer_gender(boolean customer_gender) {
        this.customer_gender = customer_gender;
    }

    public String getCustomer_id_card() {
        return customer_id_card;
    }

    public void setCustomer_id_card(String customer_id_card) {
        this.customer_id_card = customer_id_card;
    }

    public String getCustomer_phone() {
        return customer_phone;
    }

    public void setCustomer_phone(String customer_phone) {
        this.customer_phone = customer_phone;
    }

    public String getCustomer_email() {
        return customer_email;
    }

    public void setCustomer_email(String customer_email) {
        this.customer_email = customer_email;
    }

    public String getCustomer_address() {
        return customer_address;
    }

    public void setCustomer_address(String customer_address) {
        this.customer_address = customer_address;
    }
}
