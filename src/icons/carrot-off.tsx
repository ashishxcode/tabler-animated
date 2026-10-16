"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8.868 8.846c-2.756 3.382 -5.868 12.154 -5.868 12.154s8.75 -3.104 12.134 -5.85m1.667 -2.342a4.486 4.486 0 0 0 -5.589 -5.615"}],["path",{"d":"M9 13l-1.5 -1.5"}],["path",{"d":"M22 8s-1.14 -2 -3 -2c-1.406 0 -3 2 -3 2s1.14 2 3 2s3 -2 3 -2"}],["path",{"d":"M16 2s-2 1.14 -2 3s2 3 2 3s2 -1.577 2 -3c0 -1.86 -2 -3 -2 -3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0],"o":[10,14],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[8.25,12.25],[19,8],[16,5]]}];

export const CarrotOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CarrotOffIcon.displayName = "CarrotOffIcon";
