#include <node.h>
#include <v8.h>

using namespace v8;

namespace webgl {

  Handle<Value> CreateShader(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected CreateShader(Number)")));
    }

    return ThrowException(Exception::Error(String::New("CreateShader not implemented in node-webgl")));
  }


  Handle<Value> ShaderSource(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected ShaderSource(Number)")));
    }

    return ThrowException(Exception::Error(String::New("ShaderSource not implemented in node-webgl")));
  }


  Handle<Value> CompileShader(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected CompileShader(Number)")));
    }

    return ThrowException(Exception::Error(String::New("CompileShader not implemented in node-webgl")));
  }


  Handle<Value> GetShaderParameter(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected GetShaderParameter(Number)")));
    }

    return ThrowException(Exception::Error(String::New("GetShaderParameter not implemented in node-webgl")));
  }


  Handle<Value> CreateProgram(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected CreateProgram(Number)")));
    }

    return ThrowException(Exception::Error(String::New("CreateProgram not implemented in node-webgl")));
  }


  Handle<Value> AttachShader(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected AttachShader(Number)")));
    }

    return ThrowException(Exception::Error(String::New("AttachShader not implemented in node-webgl")));
  }


  Handle<Value> BindAttribLocation(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected BindAttribLocation(Number)")));
    }

    return ThrowException(Exception::Error(String::New("BindAttribLocation not implemented in node-webgl")));
  }


  Handle<Value> LinkProgram(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected LinkProgram(Number)")));
    }

    return ThrowException(Exception::Error(String::New("LinkProgram not implemented in node-webgl")));
  }


  Handle<Value> GetProgramParameter(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected GetProgramParameter(Number)")));
    }

    return ThrowException(Exception::Error(String::New("GetProgramParameter not implemented in node-webgl")));
  }


  Handle<Value> GetUniformLocation(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected GetUniformLocation(Number)")));
    }

    return ThrowException(Exception::Error(String::New("GetUniformLocation not implemented in node-webgl")));
  }


  Handle<Value> ClearColor(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected ClearColor(Number)")));
    }

    return ThrowException(Exception::Error(String::New("ClearColor not implemented in node-webgl")));
  }


  Handle<Value> Disable(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected Disable(Number)")));
    }

    return ThrowException(Exception::Error(String::New("Disable not implemented in node-webgl")));
  }


  Handle<Value> CreateTexture(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected CreateTexture(Number)")));
    }

    return ThrowException(Exception::Error(String::New("CreateTexture not implemented in node-webgl")));
  }


  Handle<Value> BindTexture(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected BindTexture(Number)")));
    }

    return ThrowException(Exception::Error(String::New("BindTexture not implemented in node-webgl")));
  }


  Handle<Value> TexImage2D(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected TexImage2D(Number)")));
    }

    return ThrowException(Exception::Error(String::New("TexImage2D not implemented in node-webgl")));
  }


  Handle<Value> TexParameteri(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected TexParameteri(Number)")));
    }

    return ThrowException(Exception::Error(String::New("TexParameteri not implemented in node-webgl")));
  }


  Handle<Value> Clear(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected Clear(Number)")));
    }

    return ThrowException(Exception::Error(String::New("Clear not implemented in node-webgl")));
  }


  Handle<Value> UseProgram(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected UseProgram(Number)")));
    }

    return ThrowException(Exception::Error(String::New("UseProgram not implemented in node-webgl")));
  }


  Handle<Value> Uniform4f(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected Uniform4f(Number)")));
    }

    return ThrowException(Exception::Error(String::New("Uniform4f not implemented in node-webgl")));
  }


  Handle<Value> CreateBuffer(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected CreateBuffer(Number)")));
    }

    return ThrowException(Exception::Error(String::New("CreateBuffer not implemented in node-webgl")));
  }


  Handle<Value> BindBuffer(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected BindBuffer(Number)")));
    }

    return ThrowException(Exception::Error(String::New("BindBuffer not implemented in node-webgl")));
  }


  Handle<Value> BufferData(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected BufferData(Number)")));
    }

    return ThrowException(Exception::Error(String::New("BufferData not implemented in node-webgl")));
  }


  Handle<Value> BufferSubData(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected BufferSubData(Number)")));
    }

    return ThrowException(Exception::Error(String::New("BufferSubData not implemented in node-webgl")));
  }


  Handle<Value> Enable(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected Enable(Number)")));
    }

    return ThrowException(Exception::Error(String::New("Enable not implemented in node-webgl")));
  }


  Handle<Value> BlendEquation(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected BlendEquation(Number)")));
    }

    return ThrowException(Exception::Error(String::New("BlendEquation not implemented in node-webgl")));
  }


  Handle<Value> BlendFunc(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected BlendFunc(Number)")));
    }

    return ThrowException(Exception::Error(String::New("BlendFunc not implemented in node-webgl")));
  }


  Handle<Value> EnableVertexAttribArray(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected EnableVertexAttribArray(Number)")));
    }

    return ThrowException(Exception::Error(String::New("EnableVertexAttribArray not implemented in node-webgl")));
  }


  Handle<Value> VertexAttribPointer(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected VertexAttribPointer(Number)")));
    }

    return ThrowException(Exception::Error(String::New("VertexAttribPointer not implemented in node-webgl")));
  }


  Handle<Value> Uniform1i(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected Uniform1i(Number)")));
    }

    return ThrowException(Exception::Error(String::New("Uniform1i not implemented in node-webgl")));
  }


  Handle<Value> ActiveTexture(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected ActiveTexture(Number)")));
    }

    return ThrowException(Exception::Error(String::New("ActiveTexture not implemented in node-webgl")));
  }


  Handle<Value> DrawElements(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected DrawElements(Number)")));
    }

    return ThrowException(Exception::Error(String::New("DrawElements not implemented in node-webgl")));
  }


  Handle<Value> Flush(const Arguments& args) {
    HandleScope scope;

    if (!(args.Length() == 1 && args[0]->IsNumber())) {
      return ThrowException(Exception::TypeError(String::New("Invalid arguments: Expected Flush(Number)")));
    }

    return ThrowException(Exception::Error(String::New("Flush not implemented in node-webgl")));
  }


}

extern "C" void
init(Handle<Object> target)
{
  NODE_SET_METHOD(target, "createShader", webgl::CreateShader);
  NODE_SET_METHOD(target, "shaderSource", webgl::ShaderSource);
  NODE_SET_METHOD(target, "compileShader", webgl::CompileShader);
  NODE_SET_METHOD(target, "getShaderParameter", webgl::GetShaderParameter);
  NODE_SET_METHOD(target, "createProgram", webgl::CreateProgram);
  NODE_SET_METHOD(target, "attachShader", webgl::AttachShader);
  NODE_SET_METHOD(target, "bindAttribLocation", webgl::BindAttribLocation);
  NODE_SET_METHOD(target, "linkProgram", webgl::LinkProgram);
  NODE_SET_METHOD(target, "getProgramParameter", webgl::GetProgramParameter);
  NODE_SET_METHOD(target, "getUniformLocation", webgl::GetUniformLocation);
  NODE_SET_METHOD(target, "clearColor", webgl::ClearColor);
  NODE_SET_METHOD(target, "disable", webgl::Disable);
  NODE_SET_METHOD(target, "createTexture", webgl::CreateTexture);
  NODE_SET_METHOD(target, "bindTexture", webgl::BindTexture);
  NODE_SET_METHOD(target, "texImage2D", webgl::TexImage2D);
  NODE_SET_METHOD(target, "texParameteri", webgl::TexParameteri);
  NODE_SET_METHOD(target, "clear", webgl::Clear);
  NODE_SET_METHOD(target, "useProgram", webgl::UseProgram);
  NODE_SET_METHOD(target, "uniform4f", webgl::Uniform4f);
  NODE_SET_METHOD(target, "createBuffer", webgl::CreateBuffer);
  NODE_SET_METHOD(target, "bindBuffer", webgl::BindBuffer);
  NODE_SET_METHOD(target, "bufferData", webgl::BufferData);
  NODE_SET_METHOD(target, "bufferSubData", webgl::BufferSubData);
  NODE_SET_METHOD(target, "enable", webgl::Enable);
  NODE_SET_METHOD(target, "blendEquation", webgl::BlendEquation);
  NODE_SET_METHOD(target, "blendFunc", webgl::BlendFunc);
  NODE_SET_METHOD(target, "enableVertexAttribArray", webgl::EnableVertexAttribArray);
  NODE_SET_METHOD(target, "vertexAttribPointer", webgl::VertexAttribPointer);
  NODE_SET_METHOD(target, "uniform1i", webgl::Uniform1i);
  NODE_SET_METHOD(target, "activeTexture", webgl::ActiveTexture);
  NODE_SET_METHOD(target, "drawElements", webgl::DrawElements);
  NODE_SET_METHOD(target, "flush", webgl::Flush);
}

