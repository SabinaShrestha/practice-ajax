class ProductsController < ApplicationController
  def index
  end

  def new
    render partial: 'form'
  end

  def create
    binding.pry
    
  end

  def edit
  end
end
