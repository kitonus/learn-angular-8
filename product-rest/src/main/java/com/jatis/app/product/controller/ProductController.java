package com.jatis.app.product.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jatis.app.product.dto.Status;
import com.jatis.app.product.entity.ProductEntity;
import com.jatis.app.product.service.ProductService;

@RestController
@RequestMapping("/product")
public class ProductController {

	@Autowired
	private ProductService service;
	
	
	@PostMapping
	public ProductEntity save(@RequestBody ProductEntity p) {
		return service.saveProduct(p);
	}
	
	@GetMapping
	public Iterable<ProductEntity> findAll(){
		return service.listAll();
	}
	
	
	@GetMapping("/{name}")
	public ProductEntity find(@PathVariable String name){
		return service.find(name);
	}

	@DeleteMapping("/{name}")
	public Status delete(@PathVariable String name) {
		service.deleteProduct(name);
		return new Status("SUCCESS");
	}
}
