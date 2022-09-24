package com.furama.furamamodule5.dto;

import com.furama.furamamodule5.entity.Contract;
import com.furama.furamamodule5.entity.RentType;
import com.furama.furamamodule5.entity.ServiceType;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.ArrayList;
import java.util.List;

public class ServiceDto {
    private int service_id;
    @NotBlank(message = "Không được để trống")
    @Pattern(regexp = "[a-zA-Z0-9\\s]{3,60}", message = "Tên chứa kí tự khác hoặc quá dài")
    private String service_name;
    @Min(value = 1, message = "Phai nhap so duong.")
    private int service_area;
    @Min(value = 1, message = "Phai nhap so duong.")
    private double service_cost;
    @Min(value = 1, message = "Phai nhap so duong.")
    private int service_max_people;
    private RentType rentType;
    private ServiceType serviceType;

    private String standard_room;
    private String description_other_convenience;
    @Min(value = 1, message = "Phai nhap so duong.")
    private double pool_area;
    @Min(value = 1, message = "Phai nhap so duong.")
    private int number_of_floors;
    private List<Contract> contractList= new ArrayList<>();

    public ServiceDto() {
    }

    public int getService_id() {
        return service_id;
    }

    public void setService_id(int service_id) {
        this.service_id = service_id;
    }

    public String getService_name() {
        return service_name;
    }

    public void setService_name(String service_name) {
        this.service_name = service_name;
    }

    public int getService_area() {
        return service_area;
    }

    public void setService_area(int service_area) {
        this.service_area = service_area;
    }

    public double getService_cost() {
        return service_cost;
    }

    public void setService_cost(double service_cost) {
        this.service_cost = service_cost;
    }

    public int getService_max_people() {
        return service_max_people;
    }

    public void setService_max_people(int service_max_people) {
        this.service_max_people = service_max_people;
    }

    public RentType getRentType() {
        return rentType;
    }

    public void setRentType(RentType rentType) {
        this.rentType = rentType;
    }

    public ServiceType getServiceType() {
        return serviceType;
    }

    public void setServiceType(ServiceType serviceType) {
        this.serviceType = serviceType;
    }

    public String getStandard_room() {
        return standard_room;
    }

    public void setStandard_room(String standard_room) {
        this.standard_room = standard_room;
    }

    public String getDescription_other_convenience() {
        return description_other_convenience;
    }

    public void setDescription_other_convenience(String description_other_convenience) {
        this.description_other_convenience = description_other_convenience;
    }

    public double getPool_area() {
        return pool_area;
    }

    public void setPool_area(double pool_area) {
        this.pool_area = pool_area;
    }

    public int getNumber_of_floors() {
        return number_of_floors;
    }

    public void setNumber_of_floors(int number_of_floors) {
        this.number_of_floors = number_of_floors;
    }

    public List<Contract> getContractList() {
        return contractList;
    }

    public void setContractList(List<Contract> contractList) {
        this.contractList = contractList;
    }

}
