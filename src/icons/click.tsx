"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12l3 0"}],["path",{"d":"M12 3l0 3"}],["path",{"d":"M7.8 7.8l-2.2 -2.2"}],["path",{"d":"M16.2 7.8l2.2 -2.2"}],["path",{"d":"M7.8 16.2l-2.2 2.2"}],["path",{"d":"M12 12l9 3l-4 2l-2 4l-3 -9"}]];
const rig: Rig[] = [{"fx":"tap","n":[0,1,2,3,4,5],"o":[12,21]}];

export const ClickIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ClickIcon.displayName = "ClickIcon";
