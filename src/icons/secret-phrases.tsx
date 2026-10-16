"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 5h-14a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-10a2 2 0 0 0 -2 -2"}],["path",{"d":"M7 9h3"}],["path",{"d":"M14 9h3"}],["path",{"d":"M7 12h3"}],["path",{"d":"M14 12h3"}],["path",{"d":"M7 15h3"}],["path",{"d":"M14 15h3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[8.5,9],[15.5,9],[8.5,12],[15.5,12],[8.5,15],[15.5,15]]}];

export const SecretPhrasesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SecretPhrasesIcon.displayName = "SecretPhrasesIcon";
