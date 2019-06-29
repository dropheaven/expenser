class CreateExpenses < ActiveRecord::Migration[5.2]
  def change
    create_table :expenses do |t|
      t.string :title
      t.integer :amount
      t.date :due_date
      t.belongs_to :user, index: true
    end
  end
end
