package com.jatis.app.product.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.jatis.app.product.entity.ProductEntity;

public interface ProductRepository extends PagingAndSortingRepository<ProductEntity, String>{

}
