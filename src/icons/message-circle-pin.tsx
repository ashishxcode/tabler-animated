"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12.337 19.974a9.891 9.891 0 0 1 -4.637 -.974l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.63 1.39 2.554 3.21 2.736 5.085"}],["path",{"d":"M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879"}],["path",{"d":"M19 18v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[19,18.5],"a":0.35,"dl":0.2},{"fx":"hop","n":[0],"o":[11.99,20],"d":[0,-2.2]}];

export const MessageCirclePinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MessageCirclePinIcon.displayName = "MessageCirclePinIcon";
