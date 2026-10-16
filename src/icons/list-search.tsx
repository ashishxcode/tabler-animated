"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 15a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M18.5 18.5l2.5 2.5"}],["path",{"d":"M4 6h16"}],["path",{"d":"M4 12h4"}],["path",{"d":"M4 18h4"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[19.75,19.75],"a":0.35,"dl":0.2},{"fx":"sweep","n":[0,2,3,4],"o":[12,12.5]}];

export const ListSearchIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ListSearchIcon.displayName = "ListSearchIcon";
