import React, { useState } from 'react';
import {
  SafeAreaView, ScrollView, Text, TouchableOpacity, TextInput,
} from 'react-native';
import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import { createUser, getUser, updateUser, deleteUser, UserScopes } from '../../redux/slices/usersSlice';
import GlobalStyle from '../../utils/FormatStyle';

const UsersPage = () => {
  const { loading, selectedUser } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const [getId, setGetId] = useState<string>('');
  const handleGetUserSubmit = () => {
    if (!getId) alert('Please enter an id!');
    else {
      dispatch(getUser({ id: getId }));
    }
  }

  const [createEmail, setCreateEmail] = useState<string>('');
  const [createPassword, setCreatePassword] = useState<string>('');
  const [createName, setCreateName] = useState<string>('');
  const handleCreateUserSubmit = () => {
    // Send only if all fields filled in
    if (!createEmail) alert('Please enter an email!');
    else if (!createPassword) alert('Please enter a password!');
    else if (!createName) alert('Please enter a name!');
    else {
      dispatch(createUser({ email: createEmail, password: createPassword, name: createName }));
    }
  };

  const [updateId, setUpdateId] = useState<string>('');
  const [updateEmail, setUpdateEmail] = useState<string>('');
  const [updatePassword, setUpdatePassword] = useState<string>('');
  const [updateName, setUpdateName] = useState<string>('');
  const [updateRole, setUpdateRole] = useState<string>('');
  const handleUpdateUserSubmit = () => {
    if (!updateId) alert('Please enter an id!');
    if (!updateEmail) alert('Please enter an email!');
    else if (!updatePassword) alert('Please enter a password!');
    else if (!updateName) alert('Please enter a name!');
    else if (!updateRole) alert('Please enter a scope!');
    else {
      dispatch(updateUser({ id: updateId, email: updateEmail, password: updatePassword, role: updateRole as UserScopes }));
    }
  };

  const [deleteId, setDeleteId] = useState<string>('');
  const handleDeleteUserSubmit = () => {
    if (!deleteId) alert('Please enter a id!');
    else {
      dispatch(deleteUser({ id: deleteId }));
    }
  };

  return (
    <SafeAreaView style={GlobalStyle.container}>
      <ScrollView>
        { loading ? 
            <Text>Loading...</Text>
          : (
            <>
              {
                selectedUser 
                  ? <h5>Current selected user: {selectedUser.id}, {selectedUser.email}, {selectedUser.name}, {selectedUser.role}</h5>
                  : <h5>Current selected user:</h5>
              }
              <Text>Get User</Text>
              <TextInput
                onChangeText={(text) => setGetId(text)}
                value={getId}
                placeholder="Type user id"
              />
              <TouchableOpacity
                onPress={handleGetUserSubmit}
              >
                <Text>Submit</Text>
              </TouchableOpacity>
              <Text>Create User</Text>
              <TextInput
                onChangeText={(text) => setCreateEmail(text)}
                value={createEmail}
                placeholder="Type email"
              />
              <TextInput
                onChangeText={(text) => setCreatePassword(text)}
                value={createPassword}
                placeholder="Type password"
              />
              <TextInput
                onChangeText={(text) => setCreateName(text)}
                value={createName}
                placeholder="Type name"
              />
              <TouchableOpacity
                onPress={handleCreateUserSubmit}
              >
                <Text>Submit</Text>
              </TouchableOpacity>
              <Text>Update User</Text>
              <TextInput
                onChangeText={(text) => setUpdateId(text)}
                value={updateId}
                placeholder="Type id"
              />
              <TextInput
                onChangeText={(text) => setUpdateEmail(text)}
                value={updateEmail}
                placeholder="Type email"
              />
              <TextInput
                onChangeText={(text) => setUpdatePassword(text)}
                value={updatePassword}
                placeholder="Type password"
              />
              <TextInput
                onChangeText={(text) => setUpdateName(text)}
                value={updateName}
                placeholder="Type name"
              />


              <Text>Delete User</Text>
              <TextInput
                onChangeText={(text) => setDeleteId(text)}
                value={deleteId}
                placeholder="Type id"
              />
              <TouchableOpacity
                onPress={handleDeleteUserSubmit}
              >
                <Text>Submit</Text>
              </TouchableOpacity>
            </>
          )
        }
      </ScrollView>
    </SafeAreaView>
  );
}

export default UsersPage;
