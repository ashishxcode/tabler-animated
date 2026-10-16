"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0v.001"}],["path",{"d":"M9 13h6"}],["path",{"d":"M12 10v6"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2],"o":[12,11.33],"a":-8}];

export const TrianglePlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TrianglePlusIcon.displayName = "TrianglePlusIcon";
