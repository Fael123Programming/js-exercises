def get_max_call_stack_size(i):
    try:
        i += 1
        return get_max_call_stack_size(i)
    except:
        return i
    
if __name__ == '__main__':
    print(get_max_call_stack_size(0))
    