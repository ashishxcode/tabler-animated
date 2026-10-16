"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 9a10 10 0 1 0 20 0"}],["path",{"d":"M12 19a10 10 0 0 1 10 -10"}],["path",{"d":"M2 9a10 10 0 0 1 10 10"}],["path",{"d":"M12 4a9.7 9.7 0 0 1 2.99 7.5"}],["path",{"d":"M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5"}]];
const rig: Rig[] = [{"fx":"sway","n":[0,1,2,3,4],"o":[12,19],"a":5}];

export const Plant2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Plant2Icon.displayName = "Plant2Icon";
