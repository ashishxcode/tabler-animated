"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12"}],["path",{"d":"M19 16h-12a2 2 0 0 0 -2 2"}],["path",{"d":"M9 8h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[12,17],"dl":0.05,"st":0.07},{"fx":"draw","n":[2],"o":[12,8],"dl":0.2},{"fx":"pop","n":[0],"o":[12,12],"a":0.04}];

export const Book2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Book2Icon.displayName = "Book2Icon";
