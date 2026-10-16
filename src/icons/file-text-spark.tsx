"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v3.5"}],["path",{"d":"M9 9h1"}],["path",{"d":"M9 13h6"}],["path",{"d":"M9 17h3"}],["path",{"d":"M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,5],"o":[18.25,12.75],"dl":0.05,"st":0.07},{"fx":"draw","n":[2,3,4],"o":[12,13],"dl":0.2},{"fx":"pop","n":[1],"o":[12,12],"a":0.04}];

export const FileTextSparkIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileTextSparkIcon.displayName = "FileTextSparkIcon";
