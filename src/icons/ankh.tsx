"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 13h12"}],["path",{"d":"M12 21v-8l-.422 -.211a6.472 6.472 0 0 1 -3.578 -5.789a4 4 0 1 1 8 0a6.472 6.472 0 0 1 -3.578 5.789l-.422 .211"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,12],"a":0.08},{"fx":"pop","n":[0],"o":[12,13],"a":0.22,"dl":0.1}];

export const AnkhIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AnkhIcon.displayName = "AnkhIcon";
