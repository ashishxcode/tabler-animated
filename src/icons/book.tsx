"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"}],["path",{"d":"M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"}],["path",{"d":"M3 6l0 13"}],["path",{"d":"M12 6l0 13"}],["path",{"d":"M21 6l0 13"}]];
const rig: Rig[] = [{"fx":"draw","n":[2,3,4],"o":[12,12.5],"dl":0.05,"st":0.07},{"fx":"pop","n":[0,1],"o":[12,11.9],"a":0.04}];

export const BookIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BookIcon.displayName = "BookIcon";
