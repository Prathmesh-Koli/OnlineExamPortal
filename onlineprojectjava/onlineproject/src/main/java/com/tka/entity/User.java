package com.tka.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class User {
	@Id
	String username;
	String password;
	long mobno;
	String emailid;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public long getMobno() {
		return mobno;
	}
	public void setMobno(long mobno) {
		this.mobno = mobno;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	
	
	
	@Override
	public boolean equals(Object userfromdatbase) {
		
        User user=(User) userfromdatbase;
		
		if(this.username.equals(user.username) && this.password.equals(user.password))
		{
			return true;
		}
		else 
		{
			return false;	
		}

	}
	


}
