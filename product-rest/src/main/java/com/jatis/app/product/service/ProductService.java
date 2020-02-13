package com.jatis.app.product.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jatis.app.product.entity.ProductEntity;
import com.jatis.app.product.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository repo;
	
	@Transactional(rollbackFor=Throwable.class)
	public ProductEntity saveProduct(ProductEntity p) {
		return repo.save(p);
	}
	
	@Transactional(rollbackFor=Throwable.class)
	public void deleteProduct(String name) {
		repo.deleteById(name);
	}
	
	@Transactional(readOnly=true, rollbackFor=Throwable.class)
	public Iterable<ProductEntity> listAll(){
		return repo.findAll();
	}
	
	@Transactional(readOnly=true, rollbackFor=Throwable.class)
	public ProductEntity find(String name) {
		return repo.findById(name).orElse(null);
	}


}
