"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10.987 13.943l1.957 5.016c.563 1.445 2.633 1.367 3.087 -.116l3.895 -12.727c.384 -1.253 -.79 -2.426 -2.042 -2.042l-12.727 3.895c-1.483 .454 -1.56 2.524 -.116 3.087l5.017 1.957c.426 .166 .763 .503 .929 .93"}],["path",{"d":"M9 20l-1.064 -3.151a1.25 1.25 0 0 0 -.785 -.785l-3.151 -1.064"}]];
const rig: Rig[] = [{"fx":"tap","n":[0,1],"o":[12,20]}];

export const PointerCollaboration2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PointerCollaboration2Icon.displayName = "PointerCollaboration2Icon";
