"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M7 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M21 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M14 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M12 8v8"}],["path",{"d":"M6.316 12.496l4.368 -4.992"}],["path",{"d":"M17.684 12.496l-4.366 -4.99"}]];
const rig: Rig[] = [{"fx":"sway","n":[0,1,2,3,4,5,6],"o":[12,20],"a":5}];

export const BinaryTree2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BinaryTree2Icon.displayName = "BinaryTree2Icon";
