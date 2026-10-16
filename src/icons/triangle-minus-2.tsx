"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.48 15.016l-6.843 -11.426a1.914 1.914 0 0 0 -3.274 0l-8.106 13.535a1.914 1.914 0 0 0 1.636 2.871h8.107"}],["path",{"d":"M16 19h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"tilt","n":[0],"o":[11.24,11.33],"a":-8}];

export const TriangleMinus2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TriangleMinus2Icon.displayName = "TriangleMinus2Icon";
