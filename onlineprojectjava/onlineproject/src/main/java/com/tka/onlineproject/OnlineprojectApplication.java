package com.tka.onlineproject;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.ListIterator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com")
@EntityScan("com.tka.entity")
public class OnlineprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineprojectApplication.class, args);

		int len=new String().length();
		
		ArrayList<Integer> al=new ArrayList<>();
		
		al.add(10);
		al.add(20);
		al.add(5);

		HashSet<Integer> hashSet=new HashSet<Integer>(al);
		
		System.out.println(hashSet);
		
		int[] a= {10,20};
		
		al.stream().filter(no->
		{
			
			boolean answer;
		
		answer=no%2==0;
		
		return answer;
		}).forEach(System.out::println);
		
		
		 
	}
	

}

