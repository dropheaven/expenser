module Api::V1
  class ExpensesController < ApplicationController
    def index
      @expenses = Expense.all
      render json: @expenses
    end
  end
end