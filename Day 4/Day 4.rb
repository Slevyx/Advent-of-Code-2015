require 'digest/md5'

$SECRET_KEY = "ckczppom"
$PART_ONE_STARTING_WITH = "00000"
$PART_TWO_STARTING_WITH = "000000"

def get_MD5_hash(o)
  Digest::MD5.hexdigest(o)
end

def find_MD5_hash(starting_with)
    secret_number = 0
    while(!get_MD5_hash($SECRET_KEY + "#{secret_number}").start_with?(starting_with)) do
        secret_number += 1
    end
    return secret_number
end

p find_MD5_hash($PART_ONE_STARTING_WITH)
p find_MD5_hash($PART_TWO_STARTING_WITH)